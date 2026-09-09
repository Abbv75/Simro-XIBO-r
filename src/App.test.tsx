import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('App startup screen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('shows a splash screen before the main site loads', () => {
    render(<App />);

    expect(screen.getByText(/SIMRO/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2200);
    });

    expect(screen.queryByText(/SIMRO/i)).not.toBeInTheDocument();
  });
});
