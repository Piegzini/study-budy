import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.styles';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
