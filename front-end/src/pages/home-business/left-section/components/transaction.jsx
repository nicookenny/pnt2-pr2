import { TransactionContainer } from './styled-components';

export const Transaction = ({ amount, type, clientName }) => {
  return (
    <TransactionContainer>
      <h1>{type}</h1>
      <h2>{clientName}</h2>
      <h3>{amount}</h3>
    </TransactionContainer>
  );
};
