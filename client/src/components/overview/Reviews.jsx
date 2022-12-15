import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Ratings, Icons } from './styles/OverviewContainers';

const Reviews = ({ ratings, totalReviews }) => {

  const avgRatings = (ratings.reduce((sum, current) => {
    return sum + current;
  }, 0)) / ratings.length;
  const roundedRatings = (Math.round(avgRatings * 4) / 4).toFixed(2);

  return (
    <Ratings>
      <div id="stars-line">
        {totalReviews !== 0 && //shows reviews and starts if there are reviews present
          <>
            {QuarterStars(roundedRatings)}
            <a href="#ratings-reviews">Read All {totalReviews} Reviews</a>
          </>
        }
      </div>
      {/* Social media icons */}
      <Icons>
        <a href="https://www.facebook.com/"><img className="icon" id="facebook-icon" src="./facebook.png" /></a>
        <a href="https://www.twitter.com"><img className="icon" id="twitter-icon" src="./twitter.png" /></a>
        <a href="https://www.pinterest.com"><img className="icon" id="pinterest-icon" src="./pinterest.png" /></a>
      </Icons>
    </Ratings>
  )

}

function QuarterStars(ratings) {
  let rating = ratings || 0;
  let stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      let empty = Math.abs(0 - rating);
      let quart = Math.abs(0.25 - rating);
      let half = Math.abs(0.5 - rating);
      let three = Math.abs(0.75 - rating);
      let full = Math.abs(1 - rating);
      let closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case (empty):
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          console.log("OOPS");
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    rating = rating - 1;
  }

  return (
    <div>
      {stars.map((item, i) => {
        return (
          <div className="single-star-container-quarter" key={i}>
            <div className="single-star-fill-quarter" style={{ "width": `${parseInt(item * 18)}px` }}>
              <img className="single-star-outline-quarter" src="star.png" alt="stars alt"></img>
            </div>
          </div>
        );
      })}
    </div>
  );

};

export default Reviews