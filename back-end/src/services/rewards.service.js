import RewardsRepository from '../model/DAOs/rewards.repo.js';
import { updateRewardSchema } from '../controllers/schemas/rewards/update-rewards.schema.js';


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
//verr si va o no
  updateReward = async (id, recompensa) => {
    const { error } = updateRewardSchema.validate(recompensa)

    if (error)
      throw {
        error,
        type: 'ValidationError',
      }
      const recompensaActualizado = await this.repo.updateReward(id, recompensa);
      return recompensaActualizado; 
  };

  deleteReward = async (id) => {
    const recompensaEliminada = await this.repo.deleteReward(id);
    return recompensaEliminada;

  }
}

export default RewardsService;