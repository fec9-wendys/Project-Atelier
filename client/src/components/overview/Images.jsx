import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal.jsx';

const Images = ({ currentProduct, currentProductStyle }) => {

  const [currentMainIndex, setCurrentMainIndex] = useState(0); //main picture url
  const [startIndex, setStartIndex] = useState(0); //start index of carousel thumbnail
  const [endIndex, setEndIndex] = useState(0); //end index of carousel thumbnail
  const [isOpen, setIsOpen] = useState(false);

  //sets start and end index for thumbnail carousel
  useEffect(() => {
    setCurrentMainIndex(0);
    setStartIndex(0);
    if (currentProductStyle.photos.length <= 7) {
      setEndIndex(currentProductStyle.photos.length - 1);
    } else {
      setEndIndex(6);
    }
  }, [currentProduct])

  useEffect(() => {
    if (currentProductStyle.photos.length < currentMainIndex) {
      setCurrentMainIndex(0);
      setStartIndex(0);
      if (currentProductStyle.photos.length <= 7) {
        setEndIndex(currentProductStyle.photos.length - 1);
      } else {
        setEndIndex(6);
      }
      return;
    } else if (currentMainIndex < startIndex) {
      setStartIndex(currentMainIndex);
      setEndIndex(Math.min(currentMainIndex + 6, currentProductStyle.photos.length - 1));
    }
  }, [currentProductStyle])

  //handles clicking on thumbnail event
  const handleThumbClick = (index) => {
    setCurrentMainIndex(index + startIndex);
  }

  //handles only thumbnail carousel button clicks
  const handleArrowClick = (e) => {
    const currStartIndex = startIndex;
    const currEndIndex = endIndex;
    if (e.target.id === 'left-thumbnail-button') {
      if (currStartIndex - 2 < 0) {
        setStartIndex(0);
        setEndIndex(currEndIndex - currStartIndex)
      } else {
        setStartIndex(currStartIndex - 2);
        setEndIndex(currEndIndex - 2);
      }
    } else {
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
      }
    } else {
      newIndex = currentMainIndex + 1
      setCurrentMainIndex(newIndex);
      if (newIndex > endIndex) {
        setEndIndex(newIndex);
        console.log('this index is changed') //SOURCE OF POSSIBLE BUG, SHOULD FIXME:
        setStartIndex(startIndex + (newIndex - endIndex))
      }
    }
  }

  return (
    <div className="grid-container" id="gallery">
      <div id="main-photo">
        {currentProductStyle.photos[currentMainIndex] ? //test to see if defined when changing the currentProductStyle
          <img alt={currentProductStyle.name} src={currentProductStyle.photos[currentMainIndex].url} onClick={() => setIsOpen(true)} />
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

      <div className="carousel" id="thumbnail-carousel">

        {/* check if carousel buttons are even needed */}
        {currentProductStyle.photos.length > 7 && startIndex !== 0 &&
          <i className="fa-solid fa-chevron-left carousel-button" name="left-button" id="left-thumbnail-button" onClick={e => handleArrowClick(e)} />
        }
        {currentProductStyle.photos.length > 7 && endIndex !== currentProductStyle.photos.length - 1 &&
          <i className="fa-solid fa-chevron-right carousel-button" id="right-thumbnail-button" onClick={e => handleArrowClick(e)}></i>
        }

        {/* Actual Carousel Images */}
        <div id="carousel-images">
          {currentProductStyle.photos.length < 7 &&
            currentProductStyle.photos.map((photo, index) => {
              return <img style={thumbnailStyle} className="carousel-items" key={index} src={photo.thumbnail_url} alt={'No photo available'} onClick={e => handleThumbClick(index)} />
            })}
          {currentProductStyle.photos.length >= 7 &&
            currentProductStyle.photos.slice(startIndex, startIndex + 7).map((photo, index) => {
              return <img style={thumbnailStyle} className="carousel-items" key={index} src={photo.thumbnail_url} alt={'No photo available'} onClick={e => handleThumbClick(index)} />
            })}
        </div>

      </div>

      <ImageModal open={isOpen} onClose={() => setIsOpen(false)} currentProductStyle={currentProductStyle} currentMainIndex={currentMainIndex} handleMainArrowClick={handleMainArrowClick} setCurrentMainIndex={setCurrentMainIndex} />

    </div>
  )
}
const thumbnailStyle = {
  height: 75,
  width: 75,
  cursor: 'pointer'
}

export default Images;