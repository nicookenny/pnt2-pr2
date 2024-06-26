import RewardsService from '../services/rewards.service.js';

class RewardsController {
  constructor() {
    this.service = new RewardsService();
  }

  getRewards = async (req, res) => {
    try {
      const rewards = await this.service.getRewards();
      res.json(rewards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default RewardsController;
