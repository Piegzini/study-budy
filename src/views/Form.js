import React, { useState } from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    setFormValues(initialFormState);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
  };

  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

Form.propTypes = {};

export default Form;
