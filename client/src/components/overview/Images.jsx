import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal.jsx';

const Images = ({ currentProductStyle }) => {

  const [currentMainIndex, setCurrentMainIndex] = useState(0); //main picture url
  const [startIndex, setStartIndex] = useState(0); //start index of carousel thumbnail
  const [endIndex, setEndIndex] = useState(0); //end index of carousel thumbnail
  const [isOpen, setIsOpen] = useState(false);

  //sets main image into state
  // useEffect(() => {
  //   setCurrentMain(currentProductStyle.photos[0].url);
  // }, [currentProductStyle])

  //sets start and end index for thumbnail carousel
  useEffect(() => {
    if (currentProductStyle.photos.length <= 7) {
      setEndIndex(currentProductStyle.photos.length - 1);
    } else {
      setEndIndex(6);
    }
  }, [])

  //handles clicking on thumbnail event
  const handleThumbClick = (index) => {
    setCurrentMainIndex(index + startIndex);
  }

  //handles only thumbnail carousel button clicks
  const handleArrowClick = (e) => {
    const currStartIndex = startIndex;
    const currEndIndex = endIndex;
    if (e.target.id === 'left-button') {
      if (currStartIndex - 5 < 0) {
        setStartIndex(0);
        setEndIndex(currEndIndex - currStartIndex)
      } else {
        setStartIndex(currStartIndex - 5);
        setEndIndex(currEndIndex - 5);
      }
    } else {
      if (currEndIndex + 5 > currentProductStyle.photos.length - 1) {
        setEndIndex(currentProductStyle.photos.length - 1);
        setStartIndex(currStartIndex + (currentProductStyle.photos.length - 1 - currEndIndex))
      } else {
        setStartIndex(currStartIndex + 5);
        setEndIndex(currEndIndex + 5);
      }
    }
  }

  const handleMainArrowClick = (e) => {
    let newIndex;
    if (e.target.id === 'left-main-button') {
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
        setStartIndex(startIndex + (newIndex - endIndex))
      }
    }
  }

  return (
    <div id="gallery">
      <div id="main-image">
        {currentMainIndex !== 0 &&
          <i className="fa-solid fa-circle-chevron-left main-image-button" id="left-main-button" onClick={e => handleMainArrowClick(e)} />
        }
        {currentMainIndex !== currentProductStyle.photos.length - 1 &&
          <i className="fa-solid fa-circle-chevron-right main-image-button" id="right-main-button" onClick={e => handleMainArrowClick(e)}></i>
        }
        <img style={{ objectFit: 'contain', maxWidth: 300, height: 'auto', cursor: 'zoom-in' }} alt={currentProductStyle.name} src={currentProductStyle.photos[currentMainIndex].url} onClick={() => setIsOpen(true)} />
        <i id="expand" className="fa-solid fa-expand" onClick={() => setIsOpen(true)}></i>
      </div>

      <div className="carousel" id="thumbnail-carousel">
        {currentProductStyle.photos.length > 7 && startIndex !== 0 &&
          <i className="fa-solid fa-chevron-left carousel-button" name="left-button" id="left-button" onClick={e => handleArrowClick(e)} />
        }
        {currentProductStyle.photos.length > 7 && endIndex !== currentProductStyle.photos.length - 1 &&
          <i className="fa-solid fa-chevron-right carousel-button" name="right-button" id="right-button" onClick={e => handleArrowClick(e)}></i>
        }

        <div id="carousel-images">
          {currentProductStyle.photos.slice(startIndex, startIndex + 7).map((photo, index) => {
            return <img style={thumbnailStyle} className="carousel-items" key={index} src={photo.thumbnail_url} alt={photo.url} onClick={e => handleThumbClick(index)} />
          })}
        </div>

      </div>

      <ImageModal open={isOpen} onClose={() => setIsOpen(false)} currentProductStyle={currentProductStyle} currentMainIndex={currentMainIndex} handleMainArrowClick={handleMainArrowClick} setCurrentMainIndex={setCurrentMainIndex}>

      </ImageModal>

    </div>
  )
}
const thumbnailStyle = {
  height: 75,
  width: 75,
  cursor: 'pointer'
}

export default Images;