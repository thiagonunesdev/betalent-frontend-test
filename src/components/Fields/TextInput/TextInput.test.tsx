import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('TextInput component', () => {
  it('renders the input correctly', () => {
    render(<TextInput placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('shows the search icon when `showSearchIcon` is true', () => {
    render(<TextInput showSearchIcon placeholder="Search" />);
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
  });

  it('does not show the search icon when `showSearchIcon` is false', () => {
    render(<TextInput placeholder="Search" showSearchIcon={false} />);
    expect(screen.queryByTestId('search-icon')).not.toBeInTheDocument();
  });

  it('allows typing in the input', async () => {
    const user = userEvent.setup();
    render(<TextInput placeholder="Name" />);
    const input = screen.getByPlaceholderText('Name') as HTMLInputElement;

    await user.type(input, 'Thiago');
    expect(input.value).toBe('Thiago');
  });
});
