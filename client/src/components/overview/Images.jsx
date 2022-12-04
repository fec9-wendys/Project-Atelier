import React, { useState, useEffect } from 'react';

const Images = ({ currentProductStyle }) => {

  const [currentMain, setCurrentMain] = useState('');

  useEffect(() => {
    setCurrentMain(currentProductStyle.photos[0].url);
  }, [currentProductStyle])

  const handleClick = (e) => {
    setCurrentMain(e.target.id);
  }

  return (
    <div>
      <div>
        I am current product style_id: {currentProductStyle['style_id']} <br />
        <img style={{ objectFit: 'contain', maxWidth: 300, height: 'auto' , cursor: 'zoom-in'}} src={currentMain} />
        {currentProductStyle.photos.map((photo, index) => {
          return <img style={thumbnailStyle} key={index} id={photo.url} src={photo.thumbnail_url} onClick={e=> handleClick(e)} />
        })}
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