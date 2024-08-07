import { ObjectId } from 'mongodb';
import { Database } from '../Database.js';

class ClientRepository {
  constructor() {
    const { db } = Database;
    this.repo = db.collection('clientes');
  }

  getClients = async () => {
    const clientes = await this.repo.find().toArray();
    return clientes;
  };

  getClient = async (id) => {
    try {
      const cliente = await this.repo.findOne({ _id: new ObjectId(id) });
      return cliente;
    } catch (error) {
      return null;
    }
  };

  getClientByEmail = async (email) => {
    try {
      const cliente = await this.repo.findOne({email});
      return cliente;
    } catch (error) {
      return null;
    }
  };

  createClient = async (cliente) => {
    await this.repo.insertOne(cliente);
    return cliente;
  };

  updateClient = async (id, cliente) => {
    await this.repo.updateOne({ _id: new ObjectId(id) }, { $set: cliente });
    const clienteActualizado = await this.getClient(id);
    return clienteActualizado;
  };

  removeClient = async (id) => {
    const deletedClient = await this.getClient(id);
    await this.repo.deleteOne({ _id: new ObjectId(id) });
    return deletedClient;
  };
}

export default ClientRepository;
