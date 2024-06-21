import ClientService from '../services/client.service.js';

class ClientController {
  constructor() {
    this.service = new ClientService();
  }

  getClients = async (req, res) => {
    try {
      const { id } = req.params;
      const clientes = await this.service.getClients(id);
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createClient = async (req, res) => {
    const cliente = req.body;
    const clienteGuardado = await this.service.createClient(cliente);
    res.json(clienteGuardado);
  };

  updateClient = async (req, res) => {
    const { id } = req.params;
    const cliente = req.body;
    const clienteActualizado = await this.service.updateClient(id, cliente);
    res.json(clienteActualizado);
  };

  removeClient = async (req, res) => {
    const { id } = req.params;
    const clienteEliminado = await this.service.removeClient(id);
    res.json(clienteEliminado);
  };
}

export default ClientController;
