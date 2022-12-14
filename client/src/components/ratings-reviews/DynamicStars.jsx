import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const DynamicStars = ({starRating, setStarRating, shownWord, setShownWord}) => {
  const [starArray, setStarArray] = useState([0, 0, 0, 0, 0]);
  const [oldStarArray, setOldStarArray] = useState([0, 0, 0, 0, 0]);
  const ratingWords = {
    5: 'Great',
    4: 'Good',
    3: 'Average',
    2: 'Fair',
    1: 'Poor'
  };

  const handleStarsHover = (e) => {
    e.preventDefault();
    let rating = parseInt(e.target.id) + 1;
    let newArr = [];
    while (newArr.length < 5) {
      if (rating > 0) {
        rating--;
        newArr.push(1);
      } else {
        newArr.push(0);
      }
    }

    setStarArray(newArr);
  };

  const handleStarsClick = (e) => {
    e.preventDefault();
    setOldStarArray(starArray);
    setStarRating(parseInt(e.target.id) + 1);
    setShownWord(ratingWords[parseInt(e.target.id) + 1])
  }

  const handleStarsLeave = (e) => {
    e.preventDefault();
    setStarArray(oldStarArray);
  }

  return (
    <div id='DynamicStars-review'>
      {starArray.map((item, i) => {
          return (
                <div className="single-star-container" value={i} key={i} onMouseOver={handleStarsHover} onClick={handleStarsClick}
                onMouseLeave={handleStarsLeave}>
                    <div className="single-star-fill star" style={{"width" : `${parseInt(item*31)}px`}}>
                        <img id = {i} className="single-star-outline star" src= "star.png" value={i} ></img>
                    </div>
                </div>
            );
          })}
        {/* <span> {shownWord} </span> */}
      </div>

  )
};

export default DynamicStars;