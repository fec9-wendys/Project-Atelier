import React, { useEffect, useState } from 'react';

const Reviews = ({ ratings }) => {

  const avgRatings = (ratings.reduce((sum, current) => {
    return sum + current;
  }, 0)) / ratings.length;
  const roundedRatings = (Math.round(avgRatings * 4) / 4).toFixed(2);
  const filledStarsCount = Math.floor(roundedRatings);
  let halfStarsCount = 0;
  (roundedRatings - filledStarsCount >= 0.25 && roundedRatings - filledStarsCount <= 0.75) ? halfStarsCount = 1 : halfStarsCount = 0;
  const emptyStarsCount = 5 - filledStarsCount - halfStarsCount;

  return (
    <div>
      I am ratings average: {roundedRatings}<br />
      {Array.apply(1, Array(filledStarsCount)).map((star, index) => {
        return <i key={index} className="fa-solid fa-star"></i>
      })}
      {halfStarsCount &&
        <i className="fa-solid fa-star-half-stroke"></i>}
      {Array.apply(1, Array(emptyStarsCount)).map((star, index) => {
        return <i key={index} className="fa-regular fa-star"></i>
      })}
      Insert link to reviews here!
      <div id="icons">
        <i className="fa-brands fa-square-facebook icon" id="facebook-icon"></i>
        <i className="fa-brands fa-square-twitter icon" id="twitter-icon"></i>
        <i className="fa-brands fa-square-pinterest icon" id="pinterest-icon"></i>
      </div>
    </div>
  )

}

export default Reviews