import {
  ContentContainer,
  LayoutContainer,
  NavigationContainer,
} from './styled-components';

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavigationContainer>Navegacion</NavigationContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};
