import PointsService from '../services/points.service.js';

class PointsController {
  constructor() {
    this.service = new PointsService();
  }

  getPoints = async (req, res) => {
    try {
      const { id } = req.params;
      const puntajes = await this.service.getPoints(id);
      res.json(puntajes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  savePoints = async (req, res) => {
    const puntaje = req.body;
    const puntajeGuardado = await this.service.createPoints(puntaje);
    res.json(puntajeGuardado);
  };

  updatePoints = async (req, res) => {
    const { id } = req.params;
    const puntaje = req.body;
    const puntajeActualizado = await this.service.updatePoints(id, puntaje);
    res.json(puntajeActualizado);
  };
}

export default PointsController;
