import {
  TransactionColumn,
  TransactionContainer,
  TransactionDetail,
  TransactionImage,
  TransactionTitle,
} from './styled-components';

export const Transaction = ({ amount, type, clientName }) => {
  return (
    <TransactionContainer>
      <TransactionImage src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=' />
      <TransactionColumn>
        <TransactionTitle>
          {type} - ${amount}
        </TransactionTitle>
        <TransactionDetail>{clientName}</TransactionDetail>
      </TransactionColumn>
    </TransactionContainer>
  );
};
