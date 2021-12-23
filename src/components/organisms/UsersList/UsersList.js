import React, { useEffect, useState } from 'react';
import { users as usersData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(null);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <StyledList>
        {users.map((user) => (
          <UsersListItem deleteUser={deleteUser} userData={user} key={user.name} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
