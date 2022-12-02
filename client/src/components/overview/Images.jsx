import React, { useState, useEffect } from 'react';

const Images = ({ currentProductStyle }) => {


  return (
    <div>
      {currentProductStyle !== null &&
      <div>
        I am current product id: {currentProductStyle['style_id']} <br/>
        I am first picture: <img src={currentProductStyle.photos[0].url} />
        I am thumbnails: {currentProductStyle.photos.map((photo, index) => {
          return <img key={index} src={photo.thumbnail_url}/>
        })}
      </div>
      }
    </div>
  )
}

export default Images;