import React, { useEffect, useState } from 'react';

const Reviews = ({ ratings }) => {

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

  }

export default Reviews