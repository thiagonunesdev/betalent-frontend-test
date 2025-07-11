import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';

import { H1, H2, H3, Text } from './Typography';

afterEach(cleanup);

describe('typography', () => {
  test('should render H1', () => {
    const { container } = render(<H1>Hello!</H1>);
    const headings = container.getElementsByTagName('h1');

    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('Hello!');
  });
  test('should render H2', () => {
    const { container } = render(<H2>Hello!</H2>);
    const headings = container.getElementsByTagName('h2');

    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('Hello!');
  });
  test('should render H3', () => {
    const { container } = render(<H3>Hello!</H3>);
    const headings = container.getElementsByTagName('h3');

    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('Hello!');
  });
  test('should render Text', () => {
    const { container } = render(<Text>Hello!</Text>);
    const texts = container.getElementsByTagName('span');

    expect(texts).toHaveLength(1);
    expect(texts[0]).toHaveTextContent('Hello!');
  });

  test("should not render 'textType' as an HTML attribute", () => {
    const { container } = render(<H1>Hello!</H1>);
    const headings = container.getElementsByTagName('h1');

    expect(headings).toHaveLength(1);
    expect(headings[0]).not.toHaveAttribute('textType');
  });
  test('should have a attribute in H1 component', () => {
    const { container } = render(<H1>Hello!</H1>);
    const headings = container.getElementsByTagName('h1');

    expect(headings).toHaveLength(1);
  });
  test('should have a attribute in H2 component', () => {
    const { container } = render(<H2>Hello!</H2>);
    const headings = container.getElementsByTagName('h2');

    expect(headings).toHaveLength(1);
  });
  test('should have a attribute in H3 component', () => {
    const { container } = render(<H3>Hello!</H3>);
    const headings = container.getElementsByTagName('h3');

    expect(headings).toHaveLength(1);
  });
  test('should have a attribute in Text component', () => {
    const { container } = render(<Text>Hello!</Text>);
    const texts = container.getElementsByTagName('span');

    expect(texts).toHaveLength(1);
  });
});
