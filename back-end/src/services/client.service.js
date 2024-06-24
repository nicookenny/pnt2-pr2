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

  getClients = async (id) => {
    if(id)
      {const cliente = await this.repo.getClient(id);
      return cliente;
    } else{
      const cliente = await this.repo.getClients();
      return cliente
    }
  
  };

  addScore = async (id, score) => {};

  updateClient = async (id, cliente) => {
    const updatedClient = await this.repo.updateClient(id, cliente);
    return updatedClient;
  };
}

export default ClientService;
