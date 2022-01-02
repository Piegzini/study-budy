import React from 'react';

import { StyledLink, StyledLogo, StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLogo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </StyledLogo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
    </StyledNavigation>
  );
};

Navigation.propTypes = {};

export default Navigation;
