import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  const handleClick = (index) => {
    setCurrentProductStyle(styles[index])
  }

  return (
    <div className="grid-container" id="style-selector">
      {styles.map((style, index) => {
        return (
          <div key={index} className="style-selector-thumbnails">
            {styles[index] === currentProductStyle ?
              <img alt="No photo available" src={style.photos[0].thumbnail_url} data-active onClick={e => handleClick(index)} />
              :  <img alt="No photo available" src={style.photos[0].thumbnail_url} onClick={e => handleClick(index)} />
            }
            {currentProductStyle.style_id === style.style_id ?
              <div id="checkmark">
                <i style={{ color: '#08B6EB' }}  className="fa-solid fa-circle-check" />
              </div>
              : <></>
            }
          </div>
        )
      })}

    </div>
  )

}


export default StyleSelector