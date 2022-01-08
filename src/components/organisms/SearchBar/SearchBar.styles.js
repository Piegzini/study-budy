import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { isVisible } from '@testing-library/user-event/dist/utils';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
`;

export const InputWrapper = styled.div`
  position: relative;
  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 8px;
    width: 100%;
    max-width: 350px;
    color: ${({ theme }) => theme.colors.darkGrey};
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const SearchingResults = styled.ul`
  visibility:${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}; ;
  z-index: 1000;\
  max-height: 400px;
  overflow-y: scroll;
  width: 100%;
  position: absolute;
  top: 30px;
  border-radius: 10px;
  left: 0;
  padding: 14px 19px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  background-color: #fff;
`;

export const ResultItem = styled.li`
  width: 100%;
  list-style: none;
  padding: 15px 10px;
  background-color: ${({ isHighlightedItem, theme }) => (isHighlightedItem ? theme.colors.lightPurple : 'transparent')};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  font-size: 14px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightPurple};
  &:nth-child(1) {
    border-top: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
`;
