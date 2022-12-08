import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const DynamicStars = ({}) => {
  const [starArray, setStarArray] = useState([0, 0, 0, 0, 0]);
  const [oldStarArray, setOldStarArray] = useState([0, 0, 0, 0, 0]);

  const styles = {
    single_star_outline: {
      height: '15px',
      width: '15px',
    },
    single_star_fill: {
      position: 'relative',
      display: 'inline-block',
      height: '36px',
      backgroundColor: '#333333'
    },
    single_star_container: {
      height: '36px',
      width: '31px',
      display: 'inline-block'
    }
  }

  const handleStarsHover = (e) => {
    e.preventDefault();
    let rating = parseInt(e.target.value.getAttribute('value')) + 1;
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
  }

  const handleStarsLeave = (e) => {
    e.preventDefault();
    setStarArray(oldStarArray);
  }

  return (
    <div id='DynamicStars-review'>
      <h1>Rate out of 5 Stars Change?</h1>
      {starArray.map((item, i) => {
          return (
              <div className="single-star-container" style = {styles.single_star_container} value={i} key={i}
              onMouseOver={handleStarsHover} onClick={handleStarsClick} onMouseLeave={handleStarsLeave}>
                  <div className="single-star-fill" style={{"width" : `${parseInt(item*20)}px`}}>
                      <img className="single-star-outline" src= "star.png" value={i} ></img>
                  </div>
              </div>
          );
        })}
    </div>
  );
};

export default DynamicStars;