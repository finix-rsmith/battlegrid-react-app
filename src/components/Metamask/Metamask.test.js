import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Metamask from './Metamask';

describe('<Metamask />', () => {
  test('it should mount', () => {
    render(<Metamask />);
    
    const metamask = screen.getByTestId('Metamask');

    expect(metamask).toBeInTheDocument();
  });
});