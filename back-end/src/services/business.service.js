import BusinessRepository from '../model/DAOs/business.repo.js';

class BusinessService {
  constructor() {
    this.repo = new BusinessRepository();
  }

  getBusinesses = async (id) => {
    if (id) {
      const comercio = await this.repo.getBusiness(id);
      return comercio;
    } else {
      const comercios = await this.repo.getBusinesses();
      return comercios;
    }
  };

  createBusiness = async (comercio) => {
    const comercioGuardado = await this.repo.createBusiness(comercio);
    return comercioGuardado;
  };

  updateBusiness = async (id, comercio) => {
    const comercioActualizado = await this.repo.updateBusiness(id, comercio);
    return comercioActualizado;
  };

  removeBusiness = async (id) => {
    const comercioEliminado = await this.repo.removeBusiness(id);
    return comercioEliminado;
  };
}

export default BusinessService;
