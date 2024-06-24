import { createClientSchema } from '../controllers/schemas/client/create-client.schema.js';
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
