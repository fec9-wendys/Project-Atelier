import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;

const LOG_STYLES = {
  position: 'relative',
  top: 0,
  right: 0,
}

const ReviewEntry = ({review}) => {
  const [helpful, setHelpful] = useState(false);

  const properDate = () => {
    const date = new Date(review.date.substring(0,10)).toString();
    const date1 = date.slice(0,15);
    return date1;
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    if (helpful === false) {
      setHelpful(true);
      const response = await axios.put()
    }

  }

  console.log(review);

  return (
    <div id='review-entry'>
      <span className = 'entry-stars'> {review.rating} Stars</span>
      <span className = 'entry-log' style = {LOG_STYLES}> {review.recommend ? '✔️' : '❌'} {review.reviewer_name}, {properDate()}</span>
      <div className = 'entry-summary'> <strong>{review.summary}</strong> </div>
      <div className = 'entry-body'> {review.body} </div>
      <p className = 'entry-rec'> {review.recommend ? '✔️ I recommend this product' : null}</p>
      <p className = 'entry-response'> {review.response}</p>
      <div className = 'entry-photos'> {review.photos.url} </div>
      <p>Helpful? <u onClick = {clickHandler}>Yes</u> ({review.helpfulness}) | <u>Report</u> </p>
    </div>
  );
};

export default ReviewEntry;