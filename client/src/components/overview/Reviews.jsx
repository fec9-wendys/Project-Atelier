import React, { useEffect, useState } from 'react';

const Reviews = ({ ratings, totalReviews }) => {

  const avgRatings = (ratings.reduce((sum, current) => {
    return sum + current;
  }, 0)) / ratings.length;
  const roundedRatings = (Math.round(avgRatings * 4) / 4).toFixed(2);
  // const filledStarsCount = Math.floor(roundedRatings);
  // let halfStarsCount = 0;
  // (roundedRatings - filledStarsCount >= 0.25 && roundedRatings - filledStarsCount <= 0.75) ? halfStarsCount = 1 : halfStarsCount = 0;
  // const emptyStarsCount = 5 - filledStarsCount - halfStarsCount;

  return (
    <div className="grid-container" id="ratings">
      {totalReviews !== 0 && //shows reviews and starts if there are reviews present
        <>
          {/* I am ratings average: {roundedRatings}<br />
          {Array.apply(1, Array(filledStarsCount)).map((star, index) => {
            return <i key={index} className="fa-solid fa-star"></i>
          })}
          {halfStarsCount === 1 ?
            <i className="fa-solid fa-star-half-stroke"></i>
            : <></>
          }
          {Array.apply(1, Array(emptyStarsCount)).map((star, index) => {
            return <i key={index} className="fa-regular fa-star"></i>
          })}
          &emsp; */}
          {QuarterStars(roundedRatings)}
          <a href="#ratings-reviews">Read All {totalReviews} Reviews</a>
        </>
      }
      <div id="icons">
        <a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook icon" id="facebook-icon" /></a>
        <a href="https://www.twitter.com"><i className="fa-brands fa-square-twitter icon" id="twitter-icon"></i></a>
        <a href="https://www.pinterest.com"><i className="fa-brands fa-square-pinterest icon" id="pinterest-icon"></i></a>
      </div>
    </div>
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
            <div className="single-star-fill-quarter icon" style={{ "width": `${parseInt(item * 20)}px` }}>
              <img className="single-star-outline-quarter icon" src="star.png" alt="stars alt"></img>
            </div>
          </div>
        );
      })}
    </div>
  );

};

export default Reviews