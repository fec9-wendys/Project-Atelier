import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
import {ReactSession} from 'react-client-session';
const {useState, useEffect} = React;

ReactSession.setStoreType('localStorage');

const ReviewFeed = ({ reviews }) => {
  const [count, setCount] = useState(2);
  const [shownReviews, setShownReviews] = useState([]);
  const [reviewButton,setReviewButton] = useState('More Reviews');

  useEffect(() => {
    setShownReviews(reviews.slice(0, count));
  }, [reviews, count])

  const handleClick = () => {
    if (reviews.length > 2) {
      document.getElementById('more-reviews-btn').style.visibility = 'visible';
    }

    if (count > reviews.length - 2) {
      setReviewButton('Less Reviews');

    }

    if (reviewButton === 'Less Reviews') {
      setCount(0);
      setReviewButton('More Reviews');
    }

    setCount(previousCount => previousCount + 2);
  }

  return (
    <div id='review-feed'>
      Review List Component
      {shownReviews.map((review, index) => {
          return <ReviewEntry review = {review} key = {index}/>;
      })}
      <button id = 'more-reviews-btn' onClick = {handleClick}> {reviewButton} </button>
      <button className = 'review-feed-btn2'> Add A Review +</button>
    </div>
  );
};

export default ReviewFeed;