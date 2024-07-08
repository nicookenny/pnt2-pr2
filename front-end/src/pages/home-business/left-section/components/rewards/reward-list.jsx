import { Reward } from './reward';
import { RewardListContainer } from './styled-components';

export const RewardList = ({ rewards = [] }) => {
  return (
    <RewardListContainer>
      {rewards.map((reward) => (
        <Reward key={reward.id} reward={reward} />
      ))}
    </RewardListContainer>
  );
};
