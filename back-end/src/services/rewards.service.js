import RewardsRepository from '../model/DAOs/rewards.repo.js';

class RewardsService {
  constructor() {
    this.repo = new RewardsRepository();
  }

  getRewards = async (id) => {
    if (id) {
      const recompensa = await this.repo.getRewardsById(id);
      return recompensa;
    } else {
      const recompensas = await this.repo.getReward();
      return recompensas;
    }
  };

  updateReward = async (id, recompensa) => {
    const recompensaActualizado = await this.repo.updateReward(id, recompensa);
    return recompensaActualizado;
  };

  deleteReward = async (id) => {
    const recompensaEliminada = await this.repo.deleteReward(id);
    return recompensaEliminada;

  }
}

export default RewardsService;