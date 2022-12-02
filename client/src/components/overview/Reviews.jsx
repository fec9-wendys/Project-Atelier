import React, { useEffect, useState } from 'react';

const Reviews = ({ ratings }) => {
  if (ratings.length !== 0) {
    let avgRatings = (ratings.reduce((sum, current) => {
      return sum + current;
    }, 0)) / ratings.length;
    console.log(avgRatings);

    return (
      <div>
        I am ratings average: {avgRatings}
      </div>
    )

  } else return <></>
}

export default Reviews