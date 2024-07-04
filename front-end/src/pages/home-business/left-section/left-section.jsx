import { TransactionList } from './components/transaction-list';
import { LeftColumn, Title } from './styled-components';

export const LeftSection = () => {
  const TRANSACTIONS_FROM_API = [
    {
      id: 123124,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 123124,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 123124,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 123124,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
    {
      id: 123124,
      type: 'Suma de puntos',
      amount: 1000,
      clientName: 'Pedro',
    },
  ];

  return (
    <LeftColumn>
      <Title>
        <h1>
          Hola <b>Pedro</b> de Cafe Martinez
        </h1>
      </Title>

      <div>
        <p>Los premios de tu comercio</p>

        <h3>1.000</h3>
        <p>Clientes</p>
      </div>

      <TransactionList transactions={TRANSACTIONS_FROM_API} />
    </LeftColumn>
  );
};
