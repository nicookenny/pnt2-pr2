import { ObjectId } from 'mongodb';
import { Database } from '../Database.js';

class PointsRepository {
  constructor() {
    const { db } = Database;
    this.repo = db.collection('puntajes');
  }

  getPoints = async () => {
    const puntajes = await this.repo.find({}).toArray();
    return puntajes;
  };

  getPointsById = async (id) => {
    const puntaje = await this.repo.findOne({ _id: new ObjectId(id) });
    return puntaje;
  };

  createPoints = async (puntaje) => {
    await this.repo.insertOne(puntaje);
    return puntaje;
  };

  updatePoints = async (id, puntaje) => {
    await this.repo.updateOne({ _id: new ObjectId(id) }, { $set: puntaje });
    const puntajeActualizado = await this.getPointsById(id);
    return puntajeActualizado;
  };
}

export default PointsRepository;
