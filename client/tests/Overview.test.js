/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import React from 'react';
const { useState, useEffect } = React;
import {render, screen} from '@testing-library/react';
import App from '../src/components/App.jsx';
import Overview from '../src/components/overview/Overview.jsx';
import Reviews from '../src/components/overview/Reviews.jsx';

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
        options.responseType = 'json';
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

describe('Overview Render Tests', () => {
  it('should render App and Overview', () => {
    render(<App />);
    expect(1).toEqual(1);
  })

  it('should find request', async () => {
    render(<App />);
    expect(request).toBeDefined();
  })
})