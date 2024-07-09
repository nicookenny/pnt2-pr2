import BusinessService from '../services/business.service.js';
import PositionStackService from '../services/positionstack.service.js';

class BusinessController {
  constructor() {
    this.service = new BusinessService();

    this.locationService = new PositionStackService();
  }

  getBusinesses = async (req, res) => {
    try {
      const comercios = await this.service.getBusinesses();
      res.json(comercios);
    } catch (error) {
      switch (error?.type) {
        case 'ValidationError':
          return res.status(400).json({ error: error.error.message });
        default:
          res.status(500).json({ error: error.message });
      }
    }
  };

  getBusinessById = async (req, res) => {
    try {
      const { id } = req.params;
      const comercio = await this.service.getBusinessById(id);
      res.json(comercio);
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

  getBusinessByClient = async (req, res) => {
    try {
      const { clientId } = req.params;
      const { distancia_maxima } = req.query;
      if (clientId && distancia_maxima) {
        const comercios = await this.service.getBusinessesWithQuery({
          client_id: clientId,
          distancia_maxima,
        });

        return res.json(comercios);
      }

      res.status(400).json({
        error: 'Es necesario enviar el id del cliente y la distancia máxima',
      });
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

  getRewards = async (req, res) => {
    try {
      const { clientId } = req.query;
      const { businessId } = req.params;
      const rewardsAvaible = await this.service.getRewards(
        clientId,
        businessId
      );
      res.json(rewardsAvaible);
    } catch (error) {
      switch (error?.type) {
        case 'ValidationError':
          return res.status(400).json({ ERROR: error.error });
        default:
          res.status(500).json({ ERROR: error.mess });
      }
    }
  };

  addScoreToClient = async (req, res) => {
    try {
      const { businessId } = req.params;
      const { email, points } = req.body;

      const updatedClient = await this.service.addScoreToClient(
        email,
        businessId,
        points
      );

      res.json(updatedClient);
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

  updateReward = async (req, res) => {
    try {
      const { businessId, rewardId } = req.params;
      const reward = req.body;
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
