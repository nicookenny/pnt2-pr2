import express from 'express';
import BusinessController from '../controllers/business.js';

class BusinessRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new BusinessController();
  }

  start() {
    this.router.get('/avaible-rewards/:clientId/:businessId', this.controller.rewardsByClient);
    this.router.get('/:id?', this.controller.getBusinesses);
    this.router.post('/', this.controller.createBusiness);
    this.router.put('/:id', this.controller.updateBusiness);
    this.router.delete('/:id', this.controller.removeBusiness);
    this.router.patch('/:businessId/add-reward', this.controller.addReward);
    this.router.post('/:businessId/add-score', this.controller.addScoreToClient);

    return this.router;
  }
}

export default BusinessRouter;
