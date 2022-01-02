import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from '../../../helpers/renderWithProviders';

describe('Form field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
