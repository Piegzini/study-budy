import { useEffect, useState } from 'react';
import axios from 'axios';

const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (!groupId) return;
    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((e) => console.log(e));
  }, [groupId, groups]);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        info: searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return { students, groups, findStudents };
};

export default useStudents;
