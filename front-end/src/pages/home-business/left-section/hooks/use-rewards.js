import { useEffect, useState } from 'react';
import { getBusinessInformation } from '../../../../services/business.service';

export const useRewards = () => {
  const [rewards, setRewards] = useState([]);

  const getRewards = async () => {
    const data = await getBusinessInformation('667c97ec4113c6ee6d77a52d');
    setRewards(data.rewards);
  };

  useEffect(() => {
    getRewards();
  }, []);

  return { rewards };
};
