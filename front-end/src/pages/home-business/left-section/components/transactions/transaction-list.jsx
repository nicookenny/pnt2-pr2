import { TransactionListContainer } from './styled-components';
import { Transaction } from './transaction';

export const TransactionList = ({ transactions = [] }) => {
  console.log('transactions', transactions);
  return (
    <TransactionListContainer>
      {transactions.map((transaction) => (
        <Transaction
          key=''
          amount={transaction.amount}
          clientName={transaction.clientName}
          type={transaction.type}
        />
      ))}
    </TransactionListContainer>
  );
};
