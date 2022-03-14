import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteButton from './DeleteButton';

describe('<DeleteButton />', () => {
  test('it should mount', () => {
    render(<DeleteButton />);
    
    const deleteButton = screen.getByTestId('DeleteButton');

    expect(deleteButton).toBeInTheDocument();
  });
});