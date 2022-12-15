import axios from 'axios';
import React from 'react';
const { useState, useEffect } = React;
import { ReactSession } from 'react-client-session';
import styled from 'styled-components';

import Overview from './overview/Overview.jsx';
import RelatedItems from './related-items/RelatedItems.jsx';
import Outfit from './related-items/Outfit.jsx';
import QuestionsAnswers from './questions-answers/QuestionsAnswers.jsx';
import RatingsReviews from './ratings-reviews/RatingsReviews.jsx';
import Header from './Header.jsx'

import API_KEY from '../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

ReactSession.setStoreType('localStorage');

const AppStyle = styled.div`
  background-color: ${({ isDarkMode }) => isDarkMode ? 'rgb(25, 25, 25)' : 'white'};
  color: ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};
`;

const App = () => {
  const [outfit, setOutfit] = useState(ReactSession.get('outfit') || []);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentProductStyle, setCurrentProductStyle] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ready, setReady] = useState(false);


  useEffect(() => {
    request('/products', 'GET', {}, (error, products) => {
      if (error) {
        console.error(error);
      } else {
        setCurrentProduct(products[4]);
      }
    });
  }, []);

  useEffect(() => {
    setReady(currentProduct !== null);
  }, [currentProduct]);

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

  return !ready ? null : (
    <AppStyle isDarkMode={isDarkMode}>
      <Header />
      <Overview currentProduct={currentProduct} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle} outfit={outfit} setOutfit={setOutfit} request={request} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <RelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} currentProductStyle={currentProductStyle} outfit={outfit} setOutfit={setOutfit} request={request} isDarkMode={isDarkMode} />
      <Outfit outfit={outfit} setOutfit={setOutfit} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} request={request} isDarkMode={isDarkMode} />
      <QuestionsAnswers currentProduct={currentProduct} request={request} isDarkMode={isDarkMode} />
      <RatingsReviews currentProduct={currentProduct} request={request} isDarkMode={isDarkMode} />
    </AppStyle>
  );

};

export default App;