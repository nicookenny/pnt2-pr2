import { createClientSchema } from '../controllers/schemas/client/create-client.schema.js';
import { exchangeRewardSchema } from '../controllers/schemas/client/exchange-reward.schema.js';
import ClientRepository from '../model/DAOs/client.repo.js';

class ClientService {
  constructor() {
    this.repo = new ClientRepository();
  }

  createClient = async (cliente) => {
    const { error } = createClientSchema.validate(cliente);

    if (error)
      throw {
        error,
        type: 'ValidationError',
      };

    const createdClient = await this.repo.createClient({
      ...cliente,
      scores: [],
    });

    return createdClient;
  };

  getClients = async () => {
    const clientes = await this.repo.getClients();
    return clientes;
  };

  getClientById = async (id) => {
    const cliente = await this.repo.getClient(id);
    return cliente;
  };

  exchangeReward = async (clientId, businessId, amount) => {
    const { error } = exchangeRewardSchema.validate({
      clientId,
      businessId,
      amount,
    });

    if (error)
      throw {
        error,
        type: 'ValidationError',
      };

    const client = await this.repo.getClient(clientId);
    if (!client)
      throw {
        error: 'Client does not exist',
        type: 'ValidationError',
      };

    const { scores } = client;
    const businessScore = scores.find((s) => s.businessId === businessId);

    if (!businessScore) {
      throw {
        error: 'Client does not have score for this business',
        type: 'ValidationError',
      };
    }

    if (businessScore.amount < amount) {
      throw {
        error: 'Client does not have enough score for this business',
        type: 'ValidationError',
      };
    }

    const newScores = scores.map((score) => {
      return {
        ...score,
        amount:
          score.businessId === businessId
            ? score.amount - amount
            : score.amount,
      };
    });

    const updatedClient = await this.repo.updateClient(clientId, {
      ...client,
      scores: newScores,
    });

    return updatedClient;
  };

  updateClient = async (id, cliente) => {
    const updatedClient = await this.repo.updateClient(id, cliente);
    return updatedClient;
  };

  async addScore(clientId, businessId, points) {
    const client = await this.getClientById(clientId);

    const businessScore = client.scores.find(s => s.businessId === businessId);

    if (businessScore) {
      businessScore.amount += points;
    } else {
      client.scores.push({ businessId, amount: points });
    }

     return await this.repo.updateClient(clientId, client);
  }
}

export default ClientService;
