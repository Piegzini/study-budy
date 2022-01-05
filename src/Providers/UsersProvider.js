import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data } = await axios.get('/students');
        setUsers(data.students);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    getStudents().then();
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };

  return <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}>{children}</UsersContext.Provider>;
};
