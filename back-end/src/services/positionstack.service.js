import axios from 'axios';
import { positionStackConfig } from '../config/positionstack.js';

class PositionStackService {
  URL = `http://api.positionstack.com/v1/forward?access_key=${positionStackConfig.API_KEY}`;
  constructor() {}

  getLocation = async (address) => {
    try {
      console.log('address', address);
      const { data } = await axios.get(
        `${this.URL}&query=${address}&country=AR`
      );
      const { data: locationData } = data;
      if (!locationData) return null;

      console.log('locationData', locationData);
      return locationData[0];
    } catch (error) {
      throw {
        error,
        type: 'ExternalServiceError',
      };
    }
  };
}

export default PositionStackService;
