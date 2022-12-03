import React, { useState, useEffect } from 'react';

const Images = ({ currentProductStyle }) => {

  const[currentMain, setCurrentMain] = useState('');

  useEffect(() => {
    setCurrentMain(currentProductStyle.photos[0].url);
  }, [])

  return (
    <div>
      <div>
        I am current product style_id: {currentProductStyle['style_id']} <br/>
        I am first picture: <img src={currentMain} />
        I am thumbnails: {currentProductStyle.photos.map((photo, index) => {
          return <img key={index} src={photo.thumbnail_url}/>
        })}
      </div>
    </div>
  )
}

export default Images;