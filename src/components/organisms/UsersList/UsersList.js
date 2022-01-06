import React, { useEffect, useState } from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import { Title } from '../../atoms/Title/Title';
import { useParams } from 'react-router-dom';
import useStudents from '../../../hooks/useStudents';

const UsersList = () => {
  const [isLoading, setLoadingState] = useState(null);
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  useEffect(() => {
    students.length > 0 ? setLoadingState(false) : setLoadingState(true);
  }, [students]);

  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Users List'}</Title>
      <StyledList>
        {students.map((student) => (
          <UsersListItem deleteUser={() => console.log(student)} userData={student} key={student.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
