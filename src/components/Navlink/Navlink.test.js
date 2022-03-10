import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navlink from './Navlink';

describe('<Navlink />', () => {
  test('it should mount', () => {
    render(<Navlink />);
    
    const navlink = screen.getByTestId('Navlink');

    expect(navlink).toBeInTheDocument();
  });
});