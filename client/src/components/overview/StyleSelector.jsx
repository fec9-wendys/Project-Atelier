import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StylesContainer } from './styles/OverviewContainers';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  const handleClick = (index) => {
    setCurrentProductStyle(styles[index])
  }

  return (
    <StylesContainer>
      {styles.map((style, index) => {
        return (
          <div key={index} className="style-selector-thumbnails">
            {styles[index] === currentProductStyle ?
              <img alt="No photo available" src={style.photos[0].thumbnail_url} data-active onClick={e => handleClick(index)} />
              :  <img alt="No photo available" src={style.photos[0].thumbnail_url} onClick={e => handleClick(index)} />
            }
            {currentProductStyle.style_id === style.style_id ?
              <div id="checkmark">
                <i className="fa-solid fa-circle-check" />
              </div>
              : <></>
            }
          </div>
        )
      })}

    </StylesContainer>
  )

}


export default StyleSelector