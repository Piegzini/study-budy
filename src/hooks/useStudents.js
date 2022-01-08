import axios from 'axios';
import { useCallback } from 'react';

const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const { data } = await axios.get(`/groups`);
      return data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudents = useCallback(async (groupId) => {
    try {
      const { data } = await axios.get(`/students/${groupId}`);
      return data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = useCallback(async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        info: searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }, []);
  return { getStudents, getGroups, findStudents };
};

export default useStudents;
