import { render, screen } from '@testing-library/react';
import { vi, type Mock } from 'vitest';

import { useEmployeeById } from 'hooks/useEmployees';
import Avatar from './Avatar';

vi.mock('hooks/useEmployees', () => ({
  useEmployeeById: vi.fn()
}));

describe('Avatar component', () => {
  const mockedUseEmployeeById = useEmployeeById as Mock;

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render SkeletonLoader when loading', () => {
    mockedUseEmployeeById.mockReturnValue({ data: null, isLoading: true });

    render(<Avatar id={1} name="Thiago Nunes" />);

    const container = screen.getByTestId('Avatar');
    expect(container).toBeInTheDocument();
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('should render user image when user data has image', () => {
    const userData = { image: 'https://example.com/avatar.jpg' };
    mockedUseEmployeeById.mockReturnValue({ data: userData, isLoading: false });

    render(<Avatar id={1} name="Thiago Nunes" />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', userData.image);
    expect(img).toHaveAttribute('alt', 'Thiago Nunes');
  });

  it('should render user initials when user data has no image', () => {
    const userData = { image: null };
    mockedUseEmployeeById.mockReturnValue({ data: userData, isLoading: false });

    render(<Avatar id={1} name="Thiago Nunes" />);
    expect(screen.getByText('TN')).toBeInTheDocument();
  });

  it('should render "NA" when no id and no name', () => {
    mockedUseEmployeeById.mockReturnValue({ data: null, isLoading: false });

    render(<Avatar name="" id={0} />);

    expect(screen.getByText('NA')).toBeInTheDocument();
  });
});
