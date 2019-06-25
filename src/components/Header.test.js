import React from 'react';
import Header from './Header';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('<Header/>', () => {
  it('renders without crashing', () => {
    global.renderWithRedux(<Header />);
  });

  it('renders appropriate content', () => {
    const { getByTestId } = global.renderWithRedux(<Header />);
    expect(getByTestId('Header-logo').firstChild.src).toContain(
      'gifsmos-logo.svg'
    );
    expect(getByTestId('Header-help').textContent).toMatch('Paste');
  });
});
