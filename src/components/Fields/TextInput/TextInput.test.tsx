import { useState } from 'react';
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

    const Wrapper = () => {
      const [value, setValue] = useState('');
      return (
        <TextInput placeholder="Name" value={value} onChange={(e) => setValue(e.target.value)} />
      );
    };

    render(<Wrapper />);

    const input = screen.getByPlaceholderText('Name') as HTMLInputElement;

    await user.type(input, 'Thiago');

    expect(input.value).toBe('Thiago');
  });
  it('should clear the input when clear button is clicked', async () => {
    const user = userEvent.setup();

    const Wrapper = () => {
      const [value, setValue] = useState('initial text');
      return (
        <TextInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder="Type here"
        />
      );
    };

    render(<Wrapper />);

    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;
    expect(input.value).toBe('initial text');

    const clearButton = screen.getByTestId('clear-input');
    expect(clearButton).toBeInTheDocument();

    await user.click(clearButton);

    expect(input.value).toBe('');
  });
});
