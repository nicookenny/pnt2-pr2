import { ObjectId } from 'mongodb';
import { Database } from '../Database.js';

class RewardsRepository {
  constructor() {
    const { db } = Database;
    this.repo = db.collection('recompensas');
  }

  getReward = async () => {
    const recompensas = await this.repo.find({}).toArray();
    return recompensas;
  };

  getRewardsById = async (id) => {
    const recompensa = await this.repo.findOne({ _id: new ObjectId(id) });
    return recompensa;
  };

  updateReward = async (id, recompensa) => {
    await this.repo.updateOne({ _id: new ObjectId(id) }, { $set: recompensa });
    const recompensaActualizado = await this.getRewardsById(id);
    return recompensaActualizado;
  };

  deleteReward = async (id) => {
    const recompensaBorrada = await this.getRewardsById(id);
    await this.repo.deleteOne({ _id: new ObjectId(id) });
    return recompensaBorrada;
  };
}

export default RewardsRepository;
