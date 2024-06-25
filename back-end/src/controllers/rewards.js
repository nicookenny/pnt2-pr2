import RewardsService from '../services/rewards.service.js';

class RewardsController {
  constructor() {
    this.service = new RewardsService();
  }

  getRewards = async (req, res) => {
    try {
      const { id } = req.params;
      const rewards = await this.service.getRewards(id);
      res.json(rewards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  updateReward = async (req, res) => {
    const { id } = req.params;
    const recompensa = req.body;
    const recompensaActualizado = await this.service.updateReward(id, recompensa);
    res.json(recompensaActualizado);
  };

  deleteReward = async (req, res) => {
    const { id } = req.params;
    const recompensaEliminada = await this.service.deleteReward(id);
    res.json(recompensaEliminada);
  };
}

export default RewardsController;
