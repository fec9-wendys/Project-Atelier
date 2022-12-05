import React, { useState, useEffect } from 'react';

const Images = ({ currentProductStyle }) => {

  const [currentMain, setCurrentMain] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    setCurrentMain(currentProductStyle.photos[0].url);
  }, [currentProductStyle])

  useEffect(() => {
    if (currentProductStyle.photos.length <= 7) {
      setEndIndex(currentProductStyle.photos.length - 1);
    } else {
      setEndIndex(6);
    }
  }, [])

  const handleThumbClick = (e) => {
    setCurrentMain(e.target.id);
  }

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

  return (
    <div>
      <div id="main-image">
        I am current product style_id: {currentProductStyle['style_id']} <br />
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