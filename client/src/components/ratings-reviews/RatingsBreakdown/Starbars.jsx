import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const Starbars = ({rating, ratingStats, totalReviews, setFilter, filter, setShownFilter}) => {

  // creates filter clicks for star components
  const filterHandler = (e) => {
    e.preventDefault();
    const ratingNum = parseInt(rating);

    if (!filter.includes(ratingNum)) {
      setFilter(filter => filter.concat(ratingNum));
      setShownFilter(filter => filter.concat(ratingNum));
    } else {
      console.log(ratingNum);
      const index = filter.indexOf(ratingNum);
      if (index > -1) {
        filter.splice(index, 1)
        let newFilter = [...filter];
        console.log(newFilter);
        setShownFilter(newFilter);
        setFilter(newFilter);
      }
    }

  }

  return (
    <div id='star-bars'>
      <div className = 'stars-breakdown'>
        <u onClick = {filterHandler}>{rating} Stars</u> {ratingStats[rating]}/{totalReviews} {ratingStats[rating]}
      </div>
    </div>
  );
};

export default Starbars;