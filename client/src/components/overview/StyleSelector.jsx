import React, { useState, useEffect } from 'react';

const StyleSelector = ({ currentProductStyle, setCurrentProductStyle, styles }) => {

  const [stylesThumbnailArray, setStylesThumbnailArray] = useState([]);
  console.log('i am styles: ', styles)

  useEffect(() => {
      setStylesThumbnailArray(styles.map(style => {
        return style.photos[0].thumbnail_url;
      }))
  }, [styles])


  return (
    <div>
      <h4>Select Style here</h4>
      {stylesThumbnailArray.map((thumbnail, index) => {
        return <img className="thumbnail style-selector" key={index} src={thumbnail} />
      })}

    </div>
  )

}

export default StyleSelector