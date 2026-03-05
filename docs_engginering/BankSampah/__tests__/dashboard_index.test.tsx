import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../app/dashboard/index';

describe('Dashboard (dashboard/index)', () => {
  it('renders dashboard text', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/MASUK DASHBOARD/i)).toBeTruthy();
  });
});
