import { Rewards } from './components/rewards/rewards';
import { Transactions } from './components/transactions/transactions';
import { LeftColumn, Title } from './styled-components';

export const LeftSection = ({ name = 'Peter' }) => {
  return (
    <LeftColumn>
      <Title>
        Hola <b>{name}</b> de Cafe Martinez
      </Title>
      <Rewards />
      <Transactions />
    </LeftColumn>
  );
};
