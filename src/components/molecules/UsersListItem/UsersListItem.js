import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { StyledGrade, StyledInfo, Wrapper } from './UserListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledGrade average={average}> {average} </StyledGrade>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
