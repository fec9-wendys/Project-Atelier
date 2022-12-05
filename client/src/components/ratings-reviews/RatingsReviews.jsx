import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewFeed from './ReviewFeed.jsx';
import Sort from './Sort.jsx';


// eslint-disable-next-line react/prop-types
const RatingsReviews = ({ currentProduct, setCurrentProduct, request}) => {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);
  let reviewCount = 10000;

  if (currentProduct !== null && reviews.length === 0) {
    request(`/reviews/?product_id=${currentProduct.id}&count=${reviewCount}`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        request(`/reviews/meta/?product_id=${currentProduct.id}`, 'GET', {}, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
            setMetaData(results);
          }
        });

        console.log(results.results);
        setReviews(results.results);
      }
    })
  }

  return (
    <div id='ratings-reviews'>
      Ratings and Reviews Component
      <RatingsBreakdown metaData = {metaData} />
      &nbsp;
      <ProductBreakdown currentProduct = {currentProduct} metaData = {metaData} />
      &nbsp;
      <Sort currentProduct = {currentProduct} setReviews = {setReviews} reviews = {reviews} request = {request} />
      &nbsp;
      <ReviewFeed reviews = {reviews} currentProduct = {currentProduct} />
    </div>
  );
};

export default RatingsReviews;
