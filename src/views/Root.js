import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import { UsersProvider } from '../Providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/add-user" element={<Form />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
