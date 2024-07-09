import { RightColumn } from './styled-components';
import { AddPointsForm } from './components/add-points/add-points-form'; 
import { AddPoints } from './components/add-points/add-points';

export const RightSection = () => {
  return (
  <RightColumn>
    <AddPoints />
  </RightColumn>);
};
