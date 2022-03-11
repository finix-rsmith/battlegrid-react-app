import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Collection from './Collection';

describe('<Collection />', () => {
  test('it should mount', () => {
    render(<Collection />);
    
    const collection = screen.getByTestId('Collection');

    expect(collection).toBeInTheDocument();
  });
});