import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('testing render header', () => {
  it('testing input', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'hello' } });
    /* screen.debug(); */
    expect(screen.getAllByDisplayValue('hello')).toBeTruthy();
  });
  it('trigger the search when "Enter" key is pressed ', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    /* screen.debug(); */
    expect(screen.getAllByDisplayValue('hello')).toBeTruthy();
  });
});
