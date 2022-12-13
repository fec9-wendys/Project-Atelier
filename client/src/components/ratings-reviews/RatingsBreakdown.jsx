import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Starbars from './Starbars.jsx';
const { useState, useEffect } = React;
import { RBContainer, RBRFContainer, RBRFTitle } from './styles/Container';

let avgReviews = 0;
let recPercent = 0;

const AvgReviewTitle = styled.div`
  display: inline-block;
  marginBottom: 5px;
  marginTop: 5px;
`

const RemoveAllFilter = styled.u`
  &:hover {
    color: #3366CC;
  }
`

const RatingsBreakdown = ({ metaData, reviews, setReviews, request, currentProduct, filter, setFilter, shownFilter, setShownFilter, QuarterStars, ratingStats, recStats, avgReviews, totalReviews, recPercent, setShownReviews, setCount, count }) => {



  useEffect(() => {
    console.log('RATINGS BREAKDOWN USE EFFECT RAN')

    if (filter.length === 0) {
      setShownReviews(reviews.slice(0, count));
    } else {
      let reviewsCopy = [];
      let filteredCopy = [];
      for (let review of reviews) {
        reviewsCopy.push(review);
      }

      filteredCopy = reviewsCopy.filter(review => {
        if (filter.includes(review.rating)) {
          return review;
        }
      })

      setShownReviews(filteredCopy.slice(0, count));
    }

  }, [reviews, filter, count])

  const removeAllHandler = () => {
    setShownFilter([]);
    setFilter([]);
  }

  // <RBContainer>
  // 'minHeight': '100px',
  // 'minHeight': '19px'
  return (
    <div className = 'ratings-breakdown'>
      <RBRFTitle>Customer Reviews</RBRFTitle>
      <div>
        <AvgReviewTitle>
          <strong className='body' style={{ 'fontSize': 'x-large' }}>{avgReviews} out of 5</strong>
        </AvgReviewTitle>
        <QuarterStars rating={avgReviews} />
        <div className='total-review-count' style={{ 'marginBottom': '10px' }}> {totalReviews} Reviews </div>
        <div style={{ 'fontSize': 'small' }}> {shownFilter.length !== 0 ? shownFilter.map((number, index) => { return <div key={index} className='body h2' style = {{'marginBottom' : '5px'}}> Showing {number} Stars Reviews</div> }) : null}</div>
        <div style={{ 'marginTop' : '5px' }}>
          {filter.length === 0 ? null : <RemoveAllFilter onClick={removeAllHandler}> Remove all Filters </RemoveAllFilter>}
        </div>
        <p className='body h3' style = {{'marginTop' : '8px'}}> {recPercent}% of reviews recommend this product </p>
        {Object.keys(ratingStats).reverse().map((rating, index) => {
          return <Starbars key={index} rating={rating} ratingStats={ratingStats} totalReviews={totalReviews}
            setFilter={setFilter} filter={filter} setShownFilter={setShownFilter} />;
        })}
      </div>
    </div>
  );
};

export default RatingsBreakdown;