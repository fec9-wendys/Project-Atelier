/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import React from 'react';
import { render, screen } from '@testing-library/react';

import RelatedItems from '../src/components/related-items/RelatedItems.jsx';
import Outfit from '../src/components/related-items/Outfit.jsx';

import API_KEY from '../src/config.js';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const request = async (path, method, body = {}, callback = () => {}) => {
  try {
    const options = {
      url: API_URL + path,
      method,
      headers: { 'Authorization': API_KEY }
    };
    switch (method) {
      case 'GET':
        options.repsonseType = 'json';
        break;
      case 'POST':
        options.data = body;
        break;
    }
    const { data } = await axios(options);

    callback(null, data);
  } catch (error) {
    callback(error, null);
  }
};

let currentProduct = {
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z'
};
const setCurrentProduct = (product) => currentProduct = product;
let outfit = [];
const setOutfit = (outfit) => outfit = outfit;

describe('RelatedItems Component Unit Tests', () => {
  it('should render the component', () => {
    render(<RelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} outfit={outfit} setOutfit={setOutfit} request={request} />);
    expect(screen.queryByTestId('jest/related-items')).toBeTruthy();
  });
});

describe('Outfit Component Unit Tests', () => {
  it('should render the component', () => {
    render(<Outfit outfit={outfit} setOutfit={outfit} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} request={request} />);
    expect(screen.queryByTestId('jest/outfit')).toBeTruthy();
  })
})