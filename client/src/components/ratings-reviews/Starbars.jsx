import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;
import ProgressBar from './ProgressBar.jsx';
import {StarBarsContainer} from './styles/Container';

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
    <div id='star-breakdown' style = {{}}>
      <StarBarsContainer onClick = {filterHandler}>
        <u style = {{'marginRight': '5px'}}>{rating} Stars</u>
        {/* <span id = 'star-bars'> */}
        <ProgressBar bgcolor="orange" progress= {Math.round((ratingStats[rating]/totalReviews) * 100)} />
        {/* </span> */}
        <div style = {{'marginLeft' : '5px', 'width' : '30px'}}>
          <span> {ratingStats[rating]} </span>
        </div>
      </StarBarsContainer>
    </div>
  );
};

export default Starbars;