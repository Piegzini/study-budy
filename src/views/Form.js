import React, { useContext, useReducer } from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';
import { Title } from '../components/atoms/Title/Title';
import { UsersContext } from '../Providers/UsersProvider';
import useForm from '../hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const Form = () => {
  const { handleAddUser } = useContext(UsersContext);

  const { formValues, handleInputChange, handleClearForm, handleToggleConsent, handleThrowError } = useForm(initialFormState);
  console.log(formValues);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState);
    } else {
      handleThrowError('You need to give consent!');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitForm}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" checked={formValues.consent} onChange={handleToggleConsent} type="checkbox" />

      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

Form.propTypes = {};

export default Form;
