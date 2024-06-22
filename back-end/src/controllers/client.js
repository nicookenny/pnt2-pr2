import ClientService from '../services/client.service.js';
import PositionStackService from '../services/positionstack.service.js';

class ClientController {
  constructor() {
    this.service = new ClientService();
    this.locationService = new PositionStackService();
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
    try {
      const { address: rawAddress, ...client } = req.body;

      const {
        latitude,
        longitude,
        number,
        street,
        locality,
        neighborhood,
        country,
        label,
      } = await this.locationService.getLocation(rawAddress);

      const address = {
        number,
        street,
        locality,
        neighborhood,
        country,
        latitude,
        longitude,
        raw: label,
      };

      const createdClient = await this.service.createClient({
        ...client,
        address,
      });
      res.json(createdClient);
    } catch (error) {
      switch (error?.type) {
        case 'ValidationError':
          return res.status(400).json({ error: error.error.message });
        default:
          res.status(500).json({ error: error.message });
      }
    }
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
