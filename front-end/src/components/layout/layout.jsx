import {
  ContentContainer,
  LayoutContainer,
  NavigationContainer,
} from './styled-components';

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavigationContainer>Coffee Loyal</NavigationContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};
