import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Form from './Form';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route exact path="/" element={<Navigate to="/group" />} />
              <Route exact path="/group">
                <Route exact path=":id" element={<Dashboard />} />
                <Route exact path="" element={<Dashboard />} />
              </Route>
              <Route exact path="/add-user" element={<Form />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
