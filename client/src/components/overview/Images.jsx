import React, { useState, useEffect } from 'react';

const Images = ({ currentProductStyle }) => {

  const [currentMain, setCurrentMain] = useState(''); //main picture url
  const [startIndex, setStartIndex] = useState(0); //start index of carousel thumbnail
  const [endIndex, setEndIndex] = useState(0); //end index of carousel thumbnail

  //sets main image into state
  useEffect(() => {
    setCurrentMain(currentProductStyle.photos[0].url);
  }, [currentProductStyle])

  //sets start and end index for thumbnail carousel
  useEffect(() => {
    if (currentProductStyle.photos.length <= 7) {
      setEndIndex(currentProductStyle.photos.length - 1);
    } else {
      setEndIndex(6);
    }
  }, [])

  //handles clicking on thumbnail event
  const handleThumbClick = (e) => {
    setCurrentMain(e.target.id);
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

  }

  return (
    <div>

      <div id="main-image">
        I am current product style_id: {currentProductStyle['style_id']} <br />

        <i className="fa-solid fa-circle-chevron-left main-image-button" id="left-main-button" onClick={e => handleMainArrowClick(e)} />
        <i className="fa-solid fa-circle-chevron-right main-image-button" id="right-main-button" onClick={e => handleMainArrowClick(e)}></i>
        <img style={{ objectFit: 'contain', maxWidth: 300, height: 'auto', cursor: 'zoom-in' }} alt={currentProductStyle.name} src={currentMain} />
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
            return <img style={thumbnailStyle} className="carousel-item" key={index} id={photo.url} src={photo.thumbnail_url} alt={photo.url} onClick={e => handleThumbClick(e)} />
          })}
        </div>

      </div>

    </div>
  )
}
const thumbnailStyle = {
  height: 75,
  width: 75,
  cursor: 'pointer'
}

export default Images;