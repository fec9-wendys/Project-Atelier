/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../src/components/App.jsx';
import Overview from '../src/components/overview/Overview.jsx';

describe('Overview Render Tests', () => {
  it('should render App and Overview', () => {
    render(<App />);
    expect(1).toEqual(1);
  })
})