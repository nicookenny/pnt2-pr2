import express from 'express';
import ClientController from '../controllers/client.js';

class ClientRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new ClientController();
  }

  start() {
    this.router.get('/:id?', this.controller.getClients);
    this.router.post('/', this.controller.createClient);
    this.router.put('/:id', this.controller.updateClient);
    this.router.delete('/:id', this.controller.removeClient);

    return this.router;
  }
}

export default ClientRouter;
