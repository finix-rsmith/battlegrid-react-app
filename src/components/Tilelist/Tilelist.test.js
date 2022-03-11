import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tilelist from './Tilelist';

describe('<Tilelist />', () => {
  test('it should mount', () => {
    render(<Tilelist />);
    
    const tilelist = screen.getByTestId('Tilelist');

    expect(tilelist).toBeInTheDocument();
  });
});