import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Ratings, Icons, QuarterStarContainer, QuarterStarOutline, QuarterStarFill } from './styles/OverviewContainers';

const Anchor = styled.a`
  color: ${(props) => props.darkMode ? "white" : "black"};

  &visited {
    color: ${(props) => props.darkMode ? "white" : "black"};
  }
`

const Reviews = ({ ratings, totalReviews, isDarkMode }) => {

  const avgRatings = (ratings.reduce((sum, current) => {
    return sum + current;
  }, 0)) / ratings.length;
  const roundedRatings = (Math.round(avgRatings * 4) / 4).toFixed(2);

  return (
    <Ratings>
      <div id="stars-line">
        {totalReviews !== 0 && //shows reviews and starts if there are reviews present
          <>
            {QuarterStars(roundedRatings, isDarkMode)}
            <Anchor darkMode={isDarkMode} href="#ratings-reviews">Read All {totalReviews} Reviews</Anchor>
          </>
        }
      </div>
      {/* Social media icons */}
      <Icons>
        <a href="https://www.facebook.com/"><img name="facebook" className="icon" id="facebook-icon" src="./facebook.png" alt="facebook-logo"/></a>
        <a href="https://www.twitter.com"><img name="twitter" className="icon" id="twitter-icon" src="./twitter.png" alt="twitter-logo"/></a>
        <a href="https://www.pinterest.com"><img name="pinterest" className="icon" id="pinterest-icon" src="./pinterest.png" alt="pinterest-logo"/></a>
      </Icons>
    </Ratings>
  )

}

function QuarterStars(ratings, isDarkMode) {
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
          <QuarterStarContainer key={i}>
              <QuarterStarFill isDarkMode={isDarkMode} style={{ "width": `${parseInt(item * 18)}px` }}>
                <QuarterStarOutline className="single-star-outline-quarter" src={isDarkMode ? "invertedstar.png" : "star.png"} alt="stars alt"></QuarterStarOutline>
              </QuarterStarFill>
          </QuarterStarContainer>
        );
      })}
    </div>
  );

};

export default Reviews