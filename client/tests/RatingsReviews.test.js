/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react';

import App from '../src/components/App.jsx';
import RatingsReviews from '../src/components/ratings-reviews/RatingsReviews.jsx';

describe('Ratings and Reviews Unit Test', () => {
  it('should render entire Application', () => {
    render(<App />);
    expect(1).toEqual(1);
  });

  it('should render entire Application', () => {
    render(<RatingsReviews />);
    expect(1).toEqual(1);
  });


});