import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewModal from './ReviewModal.jsx';
const {useState, useEffect} = React;

const ReviewFeed = ({ reviews, currentProduct, request }) => {
  const [count, setCount] = useState(2);
  const [shownReviews, setShownReviews] = useState([]);
  const [reviewButton,setReviewButton] = useState('More Reviews');
  const [isOpen, SetIsOpen] = useState(false);

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
      {shownReviews.map((review, index) => {
          return <ReviewEntry review = {review} key = {index} request = {request} />;
      })}
      <button id = 'more-reviews-btn' onClick = {handleClick}> {reviews.length > 2 ? reviewButton : null} </button>
      <button className = 'open-modal' onClick = {() => SetIsOpen(true)}> Add A Review +</button>
      <ReviewModal isOpen = {isOpen} onClose = {() => {SetIsOpen(false)}} currentProduct = {currentProduct} request = {request} />
    </div>
  );
};

export default ReviewFeed;