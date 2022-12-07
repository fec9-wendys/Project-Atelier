import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  console.log('i am styles: ', styles)

  const handleClick = (index) => {
    setCurrentProductStyle(styles[index])
  }

  return (
    <div>
      <h4>Select Style here</h4>
      {styles.map((style, index) => {
        return <img key={index} style={thumbnailStyle} className="thumbnail style-selector" name={style.name} alt="No photo available" src={style.photos[0].thumbnail_url} onClick={e => handleClick(index)}/>
      })}

    </div>
  )

}

const thumbnailStyle = {
  height: 70,
  width: 70,
  cursor: 'pointer',
  borderRadius: '50%'
};

export default StyleSelector