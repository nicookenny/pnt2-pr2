import { addScoreBusinessSchema } from '../controllers/schemas/business/add-score-business.schema.js';
import { createBusinessSchema } from '../controllers/schemas/business/create-business.schema.js';
import { getBusinessByIdSchema } from '../controllers/schemas/business/get-business-by-id.schema.js';
import { addRewardSchema } from '../controllers/schemas/rewards/add-reward.schema.js';
import { getDistanceFromLatLonInKm } from '../helpers/getDistanceBetweenAddress.js';
import BusinessRepository from '../model/DAOs/business.repo.js';
import ClientService from './client.service.js';
class BusinessService {
  constructor() {
    this.repo = new BusinessRepository();

    this.clientService = new ClientService();
  }

  createBusiness = async (comercio) => {
    const { error } = createBusinessSchema.validate(comercio);
    if (error)
      throw {
        error,
        type: 'ValidationError',
      };

    const comercioGuardado = await this.repo.createBusiness(comercio);

    return comercioGuardado;
  };

  getBusinessById = async (id) => {
    const { error } = getBusinessByIdSchema.validate({ id });

    if (error)
      throw {
        error,
        type: 'ValidationError',
      };

    const comercio = await this.repo.getBusiness(id);
    return comercio;
  };

  getBusinesses = async () => {
    const comercios = await this.repo.getBusinesses();
    return comercios;
  };

  getBusinessesWithQuery = async (query) => {
    const { client_id, distancia_maxima } = query;

    const clientsService = new ClientService();
    const client = await clientsService.getClientById(client_id);
    const { address: clientAddress } = client;

    const comercios = await this.getBusinesses();

    const closestBusinesses = comercios
      .map(({ address: businessAddress, ...business }) => ({
        ...business,
        address: businessAddress,
        distance: getDistanceFromLatLonInKm(clientAddress, businessAddress),
      }))
      .filter((business) => business.distance <= distancia_maxima)
      .sort((a, b) => a.distance - b.distance)
      .map((business) => ({
        ...business,
        distance: `${business.distance.toFixed(2)} km`,
      }));

    return closestBusinesses;
  };

  updateBusiness = async (id, comercio) => {
    const comercioActualizado = await this.repo.updateBusiness(id, comercio);
    return comercioActualizado;
  };

  removeBusiness = async (id) => {
    const comercioEliminado = await this.repo.removeBusiness(id);
    return comercioEliminado;
  };

  // Agregar un reward a un comercio
  addReward = async (businessId, reward) => {
    const { error } = addRewardSchema.validate(reward);

    if (error)
      throw {
        error,
        type: 'ValidationError',
      };

    const existingBusiness = await this.repo.getBusiness(businessId);

    if (!existingBusiness)
      return {
        error: 'Business not found',
        type: 'NotFoundError',
      };

    const businessWithReward = await this.repo.addReward(businessId, reward);

    return businessWithReward;
  };

  getRewards = async (idClient, idBusiness) => {
    try {
      const business = await this.getBusinessById(idBusiness);

      if (!business) {
        throw {
          error: 'Business does not exist',
          type: 'ValidationError',
        };
      }
      if (!idClient) {
        return business.rewards;
      }

      const client = await this.clientService.getClientById(idClient);

      if (!client) {
        throw {
          error: 'Client does not exist',
          type: 'ValidationError',
        };
      }

      const { scores } = client;

      const clientScore = scores.find((b) => b.businessId === idBusiness);

      if (!clientScore || !clientScore.amount) {
        throw {
          error: 'Client does not have score for this business',
          type: 'ValidationError',
        };
      }

      const clientScoreAmount = clientScore.amount;

      const premiosDisponibles = business.rewards.filter(
        (r) => r.cost <= clientScoreAmount
      );

      return premiosDisponibles;
    } catch (error) {
      console.error('Error in rewardsByClient:', error);
      throw error;
    }
  };
  addScoreToClient = async (email, businessId, points) => {
    const { error } = addScoreBusinessSchema.validate({
      email,
      businessId,
      points,
    });
    
    if (error)
      throw {
        error,
        type: 'ValidationError',
      };

    return await this.clientService.addScore(email, businessId, points);
  };

  updateReward = async (id, recompensa) => {
    const recompensaActualizada = await this.repo.updateReward(id, recompensa);
    return recompensaActualizada;
  };
}

export default BusinessService;
