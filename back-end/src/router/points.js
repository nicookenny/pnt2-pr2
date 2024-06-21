import express from 'express';
import PointsController from '../controllers/points.js';

class PointsRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new PointsController();
  }

  start() {
    this.router.get('/:id?', this.controller.getPoints);
    this.router.post('/', this.controller.savePoints);
    this.router.put('/:id', this.controller.updatePoints);

    return this.router;
  }
}

export default PointsRouter;
