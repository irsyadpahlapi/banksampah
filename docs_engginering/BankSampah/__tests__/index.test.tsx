import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index';

describe('App (index)', () => {
  it('renders landing page and button', () => {
    const { getByText } = render(<App />);
    expect(getByText(/LANDING PAGE BANK SAMPAH/i)).toBeTruthy();
    expect(getByText(/MASUK KE DASHBOARD/i)).toBeTruthy();
  });
});
