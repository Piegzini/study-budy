import React, { useEffect, useState } from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import UsersList from '../components/organisms/UsersList/UsersList';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { TitleWrapper, Wrapper } from './DashBoard.styles';
import useStudents from '../hooks/useStudents';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const data = await getGroups();
      setGroups(data);
    })();
  }, [getGroups]);

  const { id } = useParams();

  let navigate = useNavigate();
  if (!id && groups.length > 0) navigate(`/group/${groups[0]}`);

  return (
    <Wrapper>
      <TitleWrapper>
        <h2>Group {id || groups[0]}</h2>
        <nav>{groups ? groups.map((group) => <Link to={`/group/${group}`}>{group} </Link>) : null}</nav>
      </TitleWrapper>
      <ViewWrapper>
        <UsersList />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
