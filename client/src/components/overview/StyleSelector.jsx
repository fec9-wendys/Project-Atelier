import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  const handleClick = (index) => {
    setCurrentProductStyle(styles[index])
  }

  return (
    <div>
      {styles.map((style, index) => {
        return (
          <>
            <img style={thumbnailStyle} className="thumbnail style-selector" alt="No photo available" src={style.photos[0].thumbnail_url} onClick={e => handleClick(index)} />
            {currentProductStyle.style_id === style.style_id ?
              <i style={{ color: '#08B6EB' }} className="fa-solid fa-circle-check" />
              : <></>
            }
          </>
        )
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