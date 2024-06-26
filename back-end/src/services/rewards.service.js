import RewardsRepository from '../model/DAOs/rewards.repo.js';

class RewardsService {
  constructor() {
    this.repo = new RewardsRepository();
  }

  getRewards = async () => {
    const recompensas = await this.repo.getRewards();
    return recompensas;
  };
}

export default RewardsService;
