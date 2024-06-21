import BusinessService from '../services/business.service.js';

class BusinessController {
  constructor() {
    this.service = new BusinessService();
  }

  getBusinesses = async (req, res) => {
    try {
      const { id } = req.params;
      const comercios = await this.service.getBusinesses(id);
      res.json(comercios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createBusiness = async (req, res) => {
    const comercio = req.body;
    const comercioGuardado = await this.service.createBusiness(comercio);
    res.json(comercioGuardado);
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
}

export default BusinessController;
