import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  console.log('i am styles: ', styles)

  const handleClick = (e) => {
    setCurrentProductStyle(styles[e.target.id])
  }

  return (
    <div>
      <h4>Select Style here</h4>
      {styles.map((style, index) => {
        return <img key={index} style={thumbnailStyle} className="thumbnail style-selector" id={index} name={style.name} src={style.photos[0].thumbnail_url} onClick={e => handleClick(e)}/>
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