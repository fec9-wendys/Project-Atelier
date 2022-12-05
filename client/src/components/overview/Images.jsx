import React, { useState, useEffect } from 'react';

const Images = ({ currentProductStyle }) => {

  const [currentMain, setCurrentMain] = useState('');
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    setCurrentMain(currentProductStyle.photos[0].url);
  }, [currentProductStyle])

  useEffect(() => {
    if (currentProductStyle.photos.length <= 7) {
      setCarouselImages(currentProductStyle.photos);
    } else {

    }
  }, [])

  const handleClick = (e) => {
    setCurrentMain(e.target.id);
  }

  return (
    <div>
      <div id="main-image">
        I am current product style_id: {currentProductStyle['style_id']} <br />
        <img style={{ objectFit: 'contain', maxWidth: 300, height: 'auto', cursor: 'zoom-in' }} alt={currentProductStyle.name} src={currentMain} />
      </div>
      <div className="carousel" id="thumbnail-carousel">
        <i className="fa-solid fa-chevron-left carousel-button" name="left-button" id="left-button" />
        <div id="carousel-images">
          {currentProductStyle.photos.map((photo, index) => {
            return <img style={thumbnailStyle} className="carousel-item" key={index} id={photo.url} src={photo.thumbnail_url} alt={photo.url} onClick={e => handleClick(e)} />
          })}
        </div>
        <i className="fa-solid fa-chevron-right carousel-button" name="right-button" id="right-button"></i>
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