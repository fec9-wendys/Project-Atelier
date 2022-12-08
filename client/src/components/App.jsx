import axios from 'axios';
import React from 'react';
const { useState, useEffect } = React;
import { ReactSession } from 'react-client-session';

import Overview from './overview/Overview.jsx';
import RelatedItems from './related-items/RelatedItems.jsx';
// import Outfit from './related-items/Outfit.jsx';
import QuestionsAnswers from './questions-answers/QuestionsAnswers.jsx';
import RatingsReviews from './ratings-reviews/RatingsReviews.jsx';

import API_KEY from '../config.js';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

ReactSession.setStoreType('localStorage');

const App = () => {
  const [outfit, setOutfit] = useState(ReactSession.get('outfit') || []);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentProductStyle, setCurrentProductStyle] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    request('/products', 'GET', {}, (error, products) => {
      if (error) {
        console.error(error);
      } else {
        setCurrentProduct(products[0]);
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
    <>
      <Overview currentProduct={currentProduct} currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle} outfit={outfit} setOutfit={setOutfit} request={request} />
      <RelatedItems currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} currentProductStyle={currentProductStyle} outfit={outfit} setOutfit={setOutfit} request={request} />
      {/* <Outfit outfit={outfit} setOutfit={setOutfit} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} request={request} /> */}
      <QuestionsAnswers currentProduct={currentProduct} request={request} />
      <RatingsReviews currentProduct={currentProduct} request={request} />
    </>
  );
};

export default App;