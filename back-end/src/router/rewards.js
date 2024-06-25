import express from 'express';
import rewardsController from '../controllers/rewards.js';

class RewardsRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new rewardsController();
  }

  start() {
    this.router.get('/:id?', this.controller.getRewards);
    this.router.patch('/:id', this.controller.updateReward);
    this.router.delete('/:id', this.controller.deleteReward);
    return this.router;
  }
}

export default RewardsRouter;