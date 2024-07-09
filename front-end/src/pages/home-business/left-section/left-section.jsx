import { Rewards } from './components/rewards/rewards';
import { Transactions } from './components/transactions/transactions';
import { useBusiness } from './hooks/use-business';
import { LeftColumn, Title } from './styled-components';

export const LeftSection = () => {
  const { business } = useBusiness('667c97ec4113c6ee6d77a52d');
  return (
    <LeftColumn>
      <Title>
        Hola <b>{business.name}</b> - {business.identifier}
      </Title>
      <Rewards />
      <Transactions />
    </LeftColumn>
  );
};
