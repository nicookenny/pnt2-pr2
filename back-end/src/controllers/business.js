import BusinessService from '../services/business.service.js';
import PositionStackService from '../services/positionstack.service.js';

class BusinessController {
  constructor() {
    this.service = new BusinessService();

    this.locationService = new PositionStackService();
  }

  getBusinesses = async (req, res) => {
    try {
      const { client_id } = req.headers;
      const { distancia_maxima } = req.query;

      if (client_id && distancia_maxima) {
        const comercios = await this.service.getBusinessesWithQuery({
          client_id,
          distancia_maxima,
        });

        return res.json(comercios);
      } else {
        const comercios = await this.service.getBusinesses();
        res.json(comercios);
      }
    } catch (error) {
      switch (error?.type) {
        case 'ValidationError':
          return res.status(400).json({ error: error.error.message });
        default:
          res.status(500).json({ error: error.message });
      }
    }
  };

  createBusiness = async (req, res) => {
    try {
      const { address: rawAddress, ...comercio } = req.body;

      const {
        latitude,
        longitude,
        number,
        street,
        locality,
        neighborhood,
        country,
        label,
      } = await this.locationService.getLocation(rawAddress);

      const address = {
        number,
        street,
        locality,
        neighborhood,
        country,
        latitude,
        longitude,
        raw: label,
      };

      const comercioGuardado = await this.service.createBusiness({
        ...comercio,
        address,
      });

      res.json(comercioGuardado);
    } catch (error) {
      switch (error?.type) {
        case 'ValidationError':
          return res.status(400).json({ error: error.error.message });
        case 'ExternalServiceError':
          return res
            .status(500)
            .json({ error: ' Error en un servicio externo' });
        default:
          res.status(500).json({ error: error.message });
      }
    }
  };

  updateBusiness = async (req, res) => {
    const { id } = req.params;
    const comercio = req.body;
    const comercioActualizado = await this.service.updateBusiness(id, comercio);
    res.json(comercioActualizado);
  };

  removeBusiness = async (req, res) => {
    const { id } = req.params;
    const comercioEliminado = await this.service.removeBusiness(id);
    res.json(comercioEliminado);
  };

  addReward = async (req, res) => {
    try {
      const { businessId } = req.params;
      const reward = req.body;
      const businessWithReward = await this.service.addReward(
        businessId,
        reward
      );
      res.json(businessWithReward);
    } catch (error) {
      switch (error?.type) {
        case 'ValidationError':
          return res.status(400).json({ error: error.error.message });
        case 'NotFoundError':
          return res.status(404).json({ error: error.error });
        default:
          res.status(500).json({ error: error.message });
      }
    }
  };
}

export default BusinessController;
