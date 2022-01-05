import React, { useEffect, useState } from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersList';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { TitleWrapper, Wrapper } from './DashBoard.styles';

const Dashboard = ({ deleteUser }) => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((e) => console.log(e));
  }, [id, groups]);
  return (
    <Wrapper>
      <TitleWrapper>
        <h2>Group {id || groups[0]}</h2>
        <nav>{groups ? groups.map((group) => <Link to={`/group/${group}`}>{group} </Link>) : null}</nav>
      </TitleWrapper>
      <ViewWrapper>
        <UsersList users={students} deleteUser={deleteUser} />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
