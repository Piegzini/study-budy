import React, { useContext, useState } from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { Title } from '../../atoms/Title/Title';
import { UsersContext } from '../../../Providers/UsersProvider';

const UsersList = () => {
  const { users, deleteUser } = useContext(UsersContext);
  const [isLoading, setLoadingState] = useState(null);

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
