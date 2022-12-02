import React, { useEffect, useState } from 'react';

const Reviews = ({ ratings }) => {

  if (ratings.length !== 0) {
    const avgRatings = (ratings.reduce((sum, current) => {
      return sum + current;
    }, 0)) / ratings.length;
    const roundedRatings = (Math.round(avgRatings * 4) / 4).toFixed(2);

    return (
      <div>
        I am ratings average: {roundedRatings}<br/>
        Insert link to reviews here!
      </div>
    )

  } else return <></>
}

export default Reviews