import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tile from './Tile';

describe('<Tile />', () => {
  test('it should mount', () => {
    render(<Tile />);
    
    const tile = screen.getByTestId('Tile');

    expect(tile).toBeInTheDocument();
  });
});