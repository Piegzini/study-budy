import React, { useState } from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { Title } from '../../atoms/Title/Title';

const UsersList = ({ users, deleteUser = () => console.log('usuwam') }) => {
  const [isLoading, setLoadingState] = useState(null);
  console.log(users);
  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Users List'}</Title>
      <StyledList>
        {users.map((user) => (
          <UsersListItem deleteUser={deleteUser} userData={user} key={user.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
