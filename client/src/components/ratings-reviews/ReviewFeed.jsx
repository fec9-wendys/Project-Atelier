import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
const {useState, useEffect} = React;


const ReviewFeed = ({ reviews }) => {
  return (
    <div id='review-feed'>
      Review List Component
      {reviews.map((review, index) => {
        return <ReviewEntry review = {review} key = {index}/>;
      })}
      <button className = 'review-feed-btn' disabled = {reviews.length < 2}> More Reviews</button>
      <button className = 'review-feed-btn'> Add A Review </button>
    </div>
  );
};

export default ReviewFeed;