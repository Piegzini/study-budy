import React from 'react';

import { renderWithProviders } from '../helpers/renderWithProviders';
import Form from './Form';
import { fireEvent, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Form field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <Form label="name" name="name" id="name" />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Witek' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.6' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Witek');
  });
});
