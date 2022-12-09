import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Starbars from './Starbars.jsx';
const {useState, useEffect} = React;
import {RBContainer,RBRFContainer} from './styles/Container';

let avgReviews = 0;
let recPercent = 0;

const RatingsBreakdown = ({metaData, reviews, setReviews, request, currentProduct, filter, setFilter, shownFilter, setShownFilter, QuarterStars, ratingStats, recStats, avgReviews, totalReviews, recPercent}) => {


  useEffect(() => {
    console.log('RATINGS BREAKDOWN USE EFFECT RAN')
    request(`/reviews/?product_id=${currentProduct.id}&count=10000`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
          let reviewsCopy = [];
          let filteredCopy = [];
          for (let review of results.results) {
            reviewsCopy.push(review);
          }

          filteredCopy = reviewsCopy.filter(review => {
            if (filter.includes(review.rating)) {
              return review;
          }
        });

        setReviews(filteredCopy);
      }
    })
  }, [filter])

  // setsRecStats  // PUT IN MAIN USE EFFECT
  // if (metaData.length !== 0 && ratingStats.length === 0) {
  //   setRatingStats(metaData.ratings);
  //   setRecStats(metaData.recommended);
  // }


  // Creates total review count and average review number
  // PUT IN MAIN USE EFFECT
  // if (ratingStats.length !== 0) {
  //   for (let key in ratingStats) {
  //     totalReviewsCount += parseInt(ratingStats[key]);
  //     avgReviewsCount += parseInt(key) * parseInt(ratingStats[key]);
  //   }

  //   // setTotalReviews(totalReviewsCount);
  //   // setAvgReviews(parseFloat((avgReviews / totalReviews).toFixed(1)));
  //   avgReviewsCount = parseFloat((avgReviewsCount / totalReviewsCount).toFixed(1));
  // }

  // Creates average recommended percent
  // PUT IN MAIN USE EFFECT
  // if (recStats.length !== 0) {
  //   const noCount = parseInt(recStats.false);
  //   const yesCount = parseInt(recStats.true);
  //   const totalCount = noCount + yesCount;
  //   recPercentCount = Math.round(yesCount / totalCount * 100);
  //   // setRecPercent(Math.round(yesCount / totalCount * 100));
  // }

  // useEffect(() => {
  //   // PUT IN MAIN USE EFFECT
  //   setAvgReviews(avgReviewsCount);
  //   setTotalReviews(totalReviewsCount);
  //   setRecPercent(recPercentCount);
  //   // setRatingStats(metaData.ratings);
  //   // setRecStats(metaData.recommended);
  // }, [recPercentCount])

  // <RBRFContainer>
  return (
      <RBContainer>
        Ratings Breakdown Component
        <div>
          <strong style = {{"fontSize" : "30px"}}>{avgReviews} out of 5</strong> <QuarterStars rating = {avgReviews} />
          <div> {shownFilter.length !== 0 ? shownFilter.map((number, index) => {return <div key = {index}> Showing {number} Stars Reviews</div>}): null}</div>
          <p> {recPercent}% of reviews recommend this product </p>
          {Object.keys(ratingStats).reverse().map((rating, index) => {
          return <Starbars key = {index} rating = {rating} ratingStats = {ratingStats} totalReviews = {totalReviews}
          setFilter = {setFilter} filter = {filter} setShownFilter = {setShownFilter} />;
        })}
      </div>
      </RBContainer>
  );
};

export default RatingsBreakdown;