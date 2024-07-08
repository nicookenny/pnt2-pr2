import styled from 'styled-components';

export const RewardsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RewardListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
`;

export const RewardContainer = styled.div`
  width: 10rem;
  height: 10rem;
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
`;

export const RewardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.75);
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const RewardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`;

export const RewardDescription = styled.p`
  font-size: 0.85rem;
`;
