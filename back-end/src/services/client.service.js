import ClientRepository from '../model/DAOs/client.repo.js';

class ClientService {
  constructor() {
    this.repo = new ClientRepository();
  }

  getClients = async (id) => {
    if (id) {
      const cliente = await this.repo.getClient(id);
      return cliente;
    } else {
      const clientes = await this.repo.getClients();
      return clientes;
    }
  };

  createClient = async (cliente) => {
    const clienteGuardado = await this.repo.createClient(cliente);
    return clienteGuardado;
  };

  updateClient = async (id, cliente) => {
    const clienteActualizado = await this.repo.updateClient(id, cliente);
    return clienteActualizado;
  };

  removeClient = async (id) => {
    const clienteEliminado = await this.repo.removeClient(id);
    return clienteEliminado;
  };
}

export default ClientService;
