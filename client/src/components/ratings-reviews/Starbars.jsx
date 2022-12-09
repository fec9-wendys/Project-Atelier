import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;
import ProgressBar from './ProgressBar.jsx';

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
    <div id='star-breakdown'>
      <div className = 'stars-summary'>
        <u onClick = {filterHandler}>{rating} Stars</u>
        {/* <span id = 'star-bars'> */}
        <ProgressBar bgcolor="orange" progress= {Math.round((ratingStats[rating]/totalReviews) * 100)} height={25} />
        {/* </span> */}
        <span style = {{'position' : 'absolute','right':'0px','textAlign': 'right'}}> {ratingStats[rating]} </span>
      </div>
    </div>
  );
};

export default Starbars;