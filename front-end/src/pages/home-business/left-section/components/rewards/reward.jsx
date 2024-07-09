import {
  RewardContainer,
  RewardDescription,
  RewardInfo,
  RewardTitle,
} from './styled-components';

export const Reward = ({ reward }) => {
  return (
    <RewardContainer image={reward.image}>
      <RewardInfo>
        <RewardTitle>{reward.name}</RewardTitle>
        <RewardDescription>
          {reward.description} - {reward.cost}
        </RewardDescription>
      </RewardInfo>
    </RewardContainer>
  );
};
