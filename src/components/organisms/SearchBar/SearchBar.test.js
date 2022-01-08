import { SearchBar } from './Searchbar';
import { render } from '../../../test-utils';
import { setupServer } from 'msw/node';
import { handlers } from '../../../mock/handlers';
import { screen, fireEvent, waitFor } from '@testing-library/react';

const server = setupServer(...handlers);

describe('Search bard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Ro/);
  });

  it('Hide users when search phrase is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'Krystyna' } });
    const krystyna = await screen.findByText(/Krystyna/);
    expect(krystyna).not.toBeNull();

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.queryByText(/Krystyna/)).toBeNull();
    });
  });
});
