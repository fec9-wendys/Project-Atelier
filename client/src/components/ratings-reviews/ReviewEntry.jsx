import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;

const LOG_STYLES = {
  position: 'relative',
  top: 0,
  right: 0,
}

const ReviewEntry = ({review, request}) => {
  const [helpful, setHelpful] = useState(false);
  const [update, setUpdate] = useState(false);

  const forceUpdate = () => {
    setUpdate(!update);
  }

  const properDate = () => {
    const date = new Date(review.date.substring(0,10)).toString();
    const date1 = date.slice(0,15);
    return date1;
  };

  const clickHelpHandler = (e) => {
    e.preventDefault();
    if (helpful === false) {
      setHelpful(true);
      request(`/reviews/${review.review_id}/helpful`, 'PUT', {}, (err, results) => {
        if (!err) {
          console.log('clickHelpHandler', results);
        } else {
          console.error(err);
        }
      })
    }
  }

  const clickReportHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div id='review-entry'>
      <span className = 'entry-stars'> {review.rating} Stars</span>
      <span className = 'entry-log' style = {LOG_STYLES}> {review.recommend ? '✔️' : '❌'} {review.reviewer_name}, {properDate()}</span>
      <div className = 'entry-summary'> <strong>{review.summary}</strong> </div>
      <div className = 'entry-body'> {review.body} </div>
      <p className = 'entry-rec'> {review.recommend ? '✔️ I recommend this product' : null}</p>
      <p className = 'entry-response'> {review.response}</p>
      <div className = 'entry-photos'> {review.photos.url} </div>
      <p>Helpful? <u onClick = {clickHelpHandler}>Yes</u> ({review.helpfulness}) | <u onClick = {clickReportHandler}>Report</u> </p>
    </div>
  );
};

export default ReviewEntry;