import express from 'express';
import BusinessController from '../controllers/business.js';

class BusinessRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new BusinessController();
  }

  start() {
    this.router.get('/:id?', this.controller.getBusinesses);
    this.router.post('/', this.controller.createBusiness);
    this.router.put('/:id', this.controller.updateBusiness);
    this.router.delete('/:id', this.controller.removeBusiness);

    return this.router;
  }
}

export default BusinessRouter;
