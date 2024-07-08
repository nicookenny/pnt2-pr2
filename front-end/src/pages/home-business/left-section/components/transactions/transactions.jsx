import { TransactionSection } from './styled-components';
import { TransactionList } from './transaction-list';

export const Transactions = () => {
  const TRANSACTIONS_FROM_API = [
    {
      id: 1,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 2,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 3,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 4,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 5,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 6,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 7,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
  ];

  return (
    <TransactionSection>
      <h2>Últimas transacciones</h2>
      <TransactionList transactions={TRANSACTIONS_FROM_API} />
    </TransactionSection>
  );
};
