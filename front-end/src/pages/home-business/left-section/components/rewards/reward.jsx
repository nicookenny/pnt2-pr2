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
        <RewardTitle>{reward.title}</RewardTitle>
        <RewardDescription>
          {reward.description} - {reward.points}
        </RewardDescription>
      </RewardInfo>
    </RewardContainer>
  );
};
