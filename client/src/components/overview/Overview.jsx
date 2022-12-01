import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const Overview = ({ currentProduct, request }) => {

  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  if (currentProduct !== null && reviews.length === 0) {
    request(`/reviews/?product_id=${currentProduct.id}`, 'GET', {}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.results);
        setReviews(response.results.map(result => {
          console.log('i am result.rating: ', result.rating);
          return result.rating;
        }));
      }
    })
  }

  if (currentProduct !== null )

  return (
    <div id="overview">
      {currentProduct !== null &&
        <div>
          {currentProduct.name} {currentProduct.default_price} {currentProduct.slogan}
        </div>
      }
      {reviews.length !== 0 &&
        reviews.map(review => {
          <div>
            {review.rating}
          </div>
        })}
    </div>
  )
}

export default Overview

Overview.propTypes = {
  currentProduct: PropTypes.object.isRequired,
  request: PropTypes.func.isRequired
};