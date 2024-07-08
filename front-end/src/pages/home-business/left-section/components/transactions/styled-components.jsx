import styled from 'styled-components';

export const TransactionContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`;

export const TransactionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 28rem;
  overflow-y: auto;
`;

export const TransactionTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 500;
`;

export const TransactionDetail = styled.p`
  font-size: 0.85rem;
`;

export const TransactionImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  object-fit: cover;
`;

export const TransactionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

export const TransactionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
