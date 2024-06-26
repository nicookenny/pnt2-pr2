import express from 'express';
import rewardsController from '../controllers/rewards.js';

class RewardsRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new rewardsController();
  }

  start() {
    this.router.get('/:id?', this.controller.getRewards);
    return this.router;
  }
}

export default RewardsRouter;
