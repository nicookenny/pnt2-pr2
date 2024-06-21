import { ObjectId } from 'mongodb';
import { Database } from '../Database.js';

class BusinessRepository {
  constructor() {
    const { db } = Database;
    this.repo = db.collection('comercios');
  }

  getBusinesses = async () => {
    const comercios = await this.repo.find({}).toArray();
    return comercios;
  };

  getBusiness = async (id) => {
    const comercio = await this.repo.findOne({ _id: new ObjectId(id) });
    return comercio;
  };

  createBusiness = async (comercio) => {
    await this.repo.insertOne(comercio);
    return comercio;
  };

  updateBusiness = async (id, comercio) => {
    await this.repo.updateOne({ _id: new ObjectId(id) }, { $set: comercio });
    const comercioActualizado = await this.getBusiness(id);
    return comercioActualizado;
  };

  removeBusiness = async (id) => {
    const comercioBorrado = await this.getBusiness(id);
    await this.repo.deleteOne({ _id: new ObjectId(id) });
    return comercioBorrado;
  };
}

export default BusinessRepository;
