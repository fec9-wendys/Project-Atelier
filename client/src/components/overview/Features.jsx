import React, {useState, useEffect} from 'react';

const Features = ({features}) => {

  return (
    <div>
      {features !== null &&
      console.log('i am inside features file: ', features)}
    </div>
  )
}

export default Features