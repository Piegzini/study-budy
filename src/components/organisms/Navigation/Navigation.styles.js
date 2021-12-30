import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: 70px;
  width: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  h1 {
    margin: 0 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 17px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
