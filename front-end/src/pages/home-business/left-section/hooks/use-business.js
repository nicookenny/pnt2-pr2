import { useCallback, useEffect, useState } from 'react';
import { getBusinessInformation } from '../../../../services/business.service';

export const useBusiness = (businessId) => {
  const [business, setBusiness] = useState({});
  const [loading, setLoading] = useState(true);

  const getBusiness = useCallback(async () => {
    const data = await getBusinessInformation(businessId);
    setBusiness(data);
    setLoading(false);
  }, [businessId]);

  useEffect(() => {
    getBusiness();
  }, [getBusiness]);

  return { business, loading };
};
