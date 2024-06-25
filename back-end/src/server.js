import express from 'express';
import { serverConfig } from './config/server.js';
import { Database } from './model/Database.js';
import BusinessRouter from './router/business.js';
import ClientRouter from './router/client.js';
import PointsRouter from './router/points.js';
import RewardsRouter from './router/rewards.js';

class Server {
  constructor() {
    this.app = express();
  }

  async applyPersistance() {
    await Database.connect();
  }

  applyMiddlewares() {
    this.app.use(express.json());
  }

  applyRoutes() {
    this.app.use('/comercio', new BusinessRouter().start());
    this.app.use('/cliente', new ClientRouter().start());
    this.app.use('/puntaje', new PointsRouter().start());
    this.app.use('/recompensa', new RewardsRouter().start());
  }

  listen() {
    const { PORT } = serverConfig;

    this.app.on('error', (error) =>
      console.log(`Error en servidor: ${error.message}`)
    );

    this.app.listen(PORT, () =>
      console.log(`API levantada en http://localhost:${PORT}`)
    );
  }

  async start() {
    await this.applyPersistance();
    this.applyMiddlewares();
    this.applyRoutes();
    this.listen();
  }
}

export default Server;
