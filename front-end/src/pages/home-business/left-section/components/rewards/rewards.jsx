import { useRewards } from '../../hooks/use-rewards';
import { RewardList } from './reward-list';
import { RewardsSection } from './styled-components';

export const Rewards = () => {
  const { rewards } = useRewards();

  return (
    <RewardsSection>
      <h2>Tus premios</h2>
      <RewardList rewards={rewards} />
    </RewardsSection>
  );
};
