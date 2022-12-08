import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Starbars from './Starbars.jsx';
const {useState, useEffect} = React;

let avgReviews = 0;
let recPercent = 0;

const RatingsBreakdown = ({metaData, reviews, setReviews, request, currentProduct, filter, setFilter, shownFilter, setShownFilter, QuarterStars}) => {
  const [ratingStats, setRatingStats] = useState([]);
  const [recStats, setRecStats] = useState([]);
  let totalReviews = 0;

  useEffect(() => {

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

  // setsRecStats
  if (metaData.length !== 0 && ratingStats.length === 0) {
    setRatingStats(metaData.ratings);
    setRecStats(metaData.recommended);
  }

  // Creates total review count and average review number
  if (ratingStats.length !== 0) {
    for (let key in ratingStats) {
      totalReviews += parseInt(ratingStats[key]);
      avgReviews += parseInt(key) * parseInt(ratingStats[key]);
    }

    avgReviews = parseFloat((avgReviews / totalReviews).toFixed(1));
  }

  // Creates average recommended percent
  if (recStats.length !== 0) {
    const noCount = parseInt(recStats.false);
    const yesCount = parseInt(recStats.true);
    const totalCount = noCount + yesCount;
    recPercent = Math.round(yesCount / totalCount * 100);
  }

  return (
    <div id='ratings-breakdown'>
      Ratings Breakdown Component
      <div>
        <strong>{avgReviews}</strong> <QuarterStars rating = {avgReviews} />
        <div> {shownFilter.length !== 0 ? shownFilter.map((number, index) => {return <div key = {index}> Showing {number} Stars Ranking</div>}): null}</div>
        <p> {recPercent}% of reviews recommend this product </p>
        {Object.keys(ratingStats).reverse().map((rating, index) => {
          return <Starbars key = {index} rating = {rating} ratingStats = {ratingStats} totalReviews = {totalReviews}
          setFilter = {setFilter} filter = {filter} setShownFilter = {setShownFilter} />;
        })}
      </div>
    </div>
  );
};

export default RatingsBreakdown;