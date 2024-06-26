import express from 'express';
import BusinessController from '../controllers/business.js';

class BusinessRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new BusinessController();
  }

  start() {
    this.router.get(
      '/:businessId/available-rewards',
      this.controller.getRewards
    );
    this.router.get('/:id?', this.controller.getBusinesses);
    this.router.post('/', this.controller.createBusiness);
    this.router.put('/:id', this.controller.updateBusiness);
    this.router.delete('/:id', this.controller.removeBusiness);
    this.router.patch('/:businessId/add-reward', this.controller.addReward);
    this.router.post(
      '/:businessId/add-score',
      this.controller.addScoreToClient
    );

    this.router.get('/client/:clientId', this.controller.getBusinessByClient);

    return this.router;
  }
}

export default BusinessRouter;
