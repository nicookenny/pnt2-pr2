import { useEffect, useState } from 'react';
import { getRewardsByBusiness } from '../../../../services/business.service';

export const useRewards = () => {
  const [rewards, setRewards] = useState([]);

  const getRewards = async () => {
    const data = await getRewardsByBusiness('667c97ec4113c6ee6d77a52d');
    setRewards(data);
  };

  useEffect(() => {
    getRewards();
  }, []);

  return { rewards };
};
