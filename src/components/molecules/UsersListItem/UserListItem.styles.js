import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledGrade = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme, average }) => {
    const numberAverage = parseFloat(average);
    if (numberAverage > 4) return theme.colors.error;
    if (numberAverage > 3) return theme.colors.warning;
    if (average > 2) return theme.colors.success;
    return theme.colors.grey;
  }};
`;
export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
