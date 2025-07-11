import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />);

    const header = screen.getByTestId('main-header');
    expect(header).toBeInTheDocument();
  });

  it('should render the logo SVG', () => {
    render(<Header />);

    const svg = screen.getByTestId('main-header').querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should have a link with target "_blank"', () => {
    render(<Header />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://betalent.tech/');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
