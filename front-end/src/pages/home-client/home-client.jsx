import { NavLink } from 'react-router-dom';

export const HomeClient = () => {
  return (
    <div>
      <h1>Home Client</h1>
      <NavLink to='/business'>A Business</NavLink>
    </div>
  );
};
