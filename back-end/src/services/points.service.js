import PointsRepository from '../model/DAOs/points.repo.js';

class PointsService {
  constructor() {
    this.repo = new PointsRepository();
  }

  getPoints = async (id) => {
    if (id) {
      const puntaje = await this.repo.getPointsById(id);
      return puntaje;
    } else {
      const puntajes = await this.repo.getPoints();
      return puntajes;
    }
  };

  createPoints = async (puntaje) => {
    const puntajeGuardado = await this.repo.createPoints(puntaje);
    return puntajeGuardado;
  };

  updatePoints = async (id, puntaje) => {
    const puntajeActualizado = await this.repo.updatePoints(id, puntaje);
    return puntajeActualizado;
  };
}

export default PointsService;
