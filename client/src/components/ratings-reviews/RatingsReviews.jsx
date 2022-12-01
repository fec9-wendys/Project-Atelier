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

  if (currentProduct !== null && reviews.length === 0) {
    request(`/reviews/?product_id=${currentProduct.id}`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results.results);
        setReviews(results.results);
      }
    })
  }

  return (
    <div id='ratings-reviews'>
      <RatingsBreakdown />
      <ProductBreakdown />
      <Sort />
      <ReviewFeed reviews = {reviews}/>
    </div>
  );
};


RatingsReviews.propTypes = {
  currentProduct: PropTypes.object.isRequired,
};

export default RatingsReviews;
