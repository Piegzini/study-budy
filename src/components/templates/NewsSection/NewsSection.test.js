import React from 'react';
import { renderWithProviders } from '../../../helpers/renderWithProviders';
import axios from 'axios';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import NewsSection from './NewsSection';
const mock = new MockAdapter(axios);

describe('Displays error when the article are not loaded', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded', async () => {
    renderWithProviders(<NewsSection />);
    mock
      .onGet('/', {
        params: {
          fields: 'title,content,category',
          populate: 'photo',
        },
      })
      .reply(500);
    await screen.findByText(/Sorry/);
  });

  it('Render articles', async () => {
    mock
      .onGet(`${process.env.REACT_APP_API_LINK}/api/articles`, {
        params: {
          fields: 'title,content,category',
          populate: 'photo',
        },
      })
      .reply(200, {
        data: [
          {
            id: 1,
            attributes: {
              title: 'New computers for all lecturers',
              category: 'Staff news',
              content:
                'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit quis egestas eget at magna ac commodo volutpat.',
              photo: {
                data: null,
              },
            },
          },
        ],
      });
    renderWithProviders(<NewsSection />);
    await screen.findByText(/computers/);
  });
});
