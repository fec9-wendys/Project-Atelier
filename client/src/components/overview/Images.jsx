import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';
import { LeftFlexBox, ThumbnailCarousel, ThumbnailImages } from './styles/OverviewContainers.js';

const Images = ({ currentProduct, currentProductStyle, isDarkMode }) => {

  const [currentMainIndex, setCurrentMainIndex] = useState(0); //main picture url
  const [startIndex, setStartIndex] = useState(0); //start index of carousel thumbnail
  const [endIndex, setEndIndex] = useState(0); //end index of carousel thumbnail
  const [isOpen, setIsOpen] = useState(false); //boolean state for modal open/close

  //sets start and end index for thumbnail carousel
  useEffect(() => {
    setCurrentMainIndex(0);
    setStartIndex(0);
    setEndIndex(Math.min(currentProductStyle.photos.length - 1, 6))
    if (currentProductStyle.photos.length >= 7) {
      document.getElementById('left-thumbnail-button').style.visibility = "hidden"
      if (currentProductStyle.photos.length >= 7) {
        document.getElementById('right-thumbnail-button').style.visibility = "visible";
      }
    }
  }, [currentProduct])

  useEffect(() => {
    if (currentProductStyle.photos.length < currentMainIndex) {
      setCurrentMainIndex(0);
      setStartIndex(0);
      setEndIndex(Math.min(currentProductStyle.photos.length - 1, 6))
      document.getElementById('left-thumbnail-button').style.visibility = "hidden";
      if (currentProductStyle.photos.length >= 7) {
        document.getElementById('right-thumbnail-button').style.visibility = "visible";
      }
      return;
    } else if (currentMainIndex < startIndex) {
      setStartIndex(currentMainIndex);
      setEndIndex(Math.min(currentMainIndex + 6, currentProductStyle.photos.length - 1));
      if (currentMainIndex !== 0) {
        document.getElementById('left-thumbnail-button').style.visibility = "visible";
      }
    }
    if (currentProductStyle.photos.length >= 7 && endIndex !== currentProductStyle.photos.length - 1) {
      document.getElementById('right-thumbnail-button').style.visibility = "visible";
    }
  }, [currentProductStyle])


  //handles clicking on thumbnail event
  const handleThumbClick = (index) => {
    const currentIndex = currentMainIndex;
    setCurrentMainIndex(index + startIndex);
  }

  //handles only thumbnail carousel button clicks
  const handleArrowClick = (e) => {
    const currStartIndex = startIndex;
    const currEndIndex = endIndex;
    if (e.target.id === 'left-thumbnail-button') {
      document.getElementById('right-thumbnail-button').style.visibility = "visible";
      if (currStartIndex - 2 <= 0) {
        document.getElementById('left-thumbnail-button').style.visibility = "hidden"
      }

      if (currStartIndex - 2 < 0) {
        setStartIndex(0);
        setEndIndex(currEndIndex - currStartIndex)
      } else {
        setStartIndex(currStartIndex - 2);
        setEndIndex(currEndIndex - 2);
      }
    } else {
      document.getElementById('left-thumbnail-button').style.visibility = "visible"
      if (endIndex + 2 >= currentProductStyle.photos.length - 1) {
        document.getElementById('right-thumbnail-button').style.visibility = "hidden";
      }
      if (currEndIndex + 2 > currentProductStyle.photos.length - 1) {

        setEndIndex(currentProductStyle.photos.length - 1);
        setStartIndex(currStartIndex + (currentProductStyle.photos.length - 1 - currEndIndex))

      } else {
        setStartIndex(currStartIndex + 2);
        setEndIndex(currEndIndex + 2);
      }
    }
  }

  const handleMainArrowClick = (e) => {
    let newIndex;
    if (e.target.id === 'left-main-button' || e.target.id === 'left-modal-button') {
      newIndex = currentMainIndex - 1;
      setCurrentMainIndex(newIndex);
      if (newIndex < startIndex) {
        setStartIndex(newIndex);
        setEndIndex(endIndex - (startIndex - newIndex))
        document.getElementById('right-thumbnail-button').style.visibility = "visible";
      }
      if (newIndex === 0 && currentProductStyle.photos.length >= 7) {
        document.getElementById('left-thumbnail-button').style.visibility = "hidden";
      }
    } else {
      newIndex = currentMainIndex + 1
      setCurrentMainIndex(newIndex);
      if (newIndex > endIndex) {
        setEndIndex(newIndex);
        // console.log('this index is changed') //SOURCE OF POSSIBLE BUG, SHOULD BE FIXED
        setStartIndex(startIndex + (newIndex - endIndex))
        document.getElementById('left-thumbnail-button').style.visibility = "visible";
        if (newIndex === currentProductStyle.photos.length - 1) {
          document.getElementById('right-thumbnail-button').style.visibility = "hidden";
        }
      }
    }
  }

  return (
    <LeftFlexBox>

      <div id="main-photo">
        {currentProductStyle.photos[currentMainIndex] ? //test to see if defined when changing the currentProductStyle
          <img height="800px" width="100%" alt={currentProductStyle.name} src={currentProductStyle.photos[currentMainIndex].url} onClick={() => setIsOpen(true)} />
          : <></>}

        <div id="main-buttons">
          {currentMainIndex !== 0 &&
            <i className="fa-solid fa-circle-chevron-left main-image-button" id="left-main-button" onClick={e => handleMainArrowClick(e)} />
          }
          {currentMainIndex !== currentProductStyle.photos.length - 1 &&
            <i className="fa-solid fa-circle-chevron-right main-image-button" id="right-main-button" onClick={e => handleMainArrowClick(e)}></i>
          }
        </div>
      </div>

      <ThumbnailCarousel isDarkMode={isDarkMode}>
        {/* check if carousel buttons are even needed
        {currentProductStyle.photos.length > 7 && startIndex !== 0 &&
          <i className="fa-solid fa-chevron-left carousel-button" name="left-button" id="left-thumbnail-button" onClick={e => handleArrowClick(e)} />
        }
        {currentProductStyle.photos.length > 7 && endIndex !== currentProductStyle.photos.length - 1 &&
          <i className="fa-solid fa-chevron-right carousel-button" id="right-thumbnail-button" onClick={e => handleArrowClick(e)}></i>
        } */}
        <div className="carousel-buttons">
          {/* check if carousel buttons are even needed */}
          {currentProductStyle.photos.length > 7 &&
            <i className="fa-solid fa-chevron-left" name="left-button" id="left-thumbnail-button" onClick={e => handleArrowClick(e)} />
          }
        </div>

        {/* Actual Carousel Images */}
        <ThumbnailImages>
          {currentProductStyle.photos.length < 7 &&
            currentProductStyle.photos.map((photo, index) => {
              if (index === currentMainIndex) {
                return <img name="thumbnail" className="carousel-image" key={index} src={photo.thumbnail_url} alt={'No photo available'} data-active onClick={e => handleThumbClick(index)} />
              } else {
                return <img name="thumbnail" className="carousel-image" key={index} src={photo.thumbnail_url} alt={'No photo available'} onClick={e => handleThumbClick(index)} />
              }
            })}
          {currentProductStyle.photos.length >= 7 &&
            currentProductStyle.photos.slice(startIndex, startIndex + 7).map((photo, index) => {
              if (index + startIndex === currentMainIndex) {
                return <img name="thumbnail" className="carousel-image" key={index} src={photo.thumbnail_url} alt={'No photo available'} data-active onClick={e => handleThumbClick(index)} />
              } else {
                return <img name="thumbnail" className="carousel-image" key={index} src={photo.thumbnail_url} alt={'No photo available'} onClick={e => handleThumbClick(index)} />
              }
            })}
        </ThumbnailImages>

        <div className="carousel-buttons">
          {currentProductStyle.photos.length > 7 &&
            <i className="fa-solid fa-chevron-right" id="right-thumbnail-button" onClick={e => handleArrowClick(e)}></i>
          }
        </div>
      </ThumbnailCarousel>

      <ImageModal open={isOpen} onClose={() => setIsOpen(false)} currentProductStyle={currentProductStyle} currentMainIndex={currentMainIndex} handleMainArrowClick={handleMainArrowClick} setCurrentMainIndex={setCurrentMainIndex} />

    </LeftFlexBox>
  )
}

export default Images;