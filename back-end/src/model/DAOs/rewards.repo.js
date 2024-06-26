import { Database } from '../Database.js';

class RewardsRepository {
  constructor() {
    const { db } = Database;
    this.repo = db.collection('comercios');
  }

  getRewards = async () => {
    const negocios = await this.repo.find().toArray();
    const recompensas = negocios
      .map((negocio) => {
        return negocio.rewards;
      })
      .flat();
    return recompensas;
  };
}

export default RewardsRepository;
