import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  if (currentProductStyle !== null && styles !== null) {
    console.log('i am all styles: ', styles)
    return (
      <div>
        Select Style here
      </div>
    )

  } else return <></>
}

export default StyleSelector