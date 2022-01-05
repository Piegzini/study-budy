import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;

  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  nav {
    margin: 0 20px;
    display: flex;

    a {
      margin-left: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 50px;
      padding: 5px;
      width: 30px;
      height: 30px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: bold;
    }
  }
`;
