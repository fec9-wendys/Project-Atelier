import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MODAl_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: 50,
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .9)',
  zIndex: 1000
}

const ImageModal = ({ children, open, onClose, currentMainIndex, currentProductStyle, handleMainArrowClick, setCurrentMainIndex}) => {

  const handleDotClick = (index) => {
    setCurrentMainIndex(index);
  }

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAl_STYLES} id="main-image-portal">
        {currentMainIndex !== 0 &&
          <i style={{color: '#FFF'}} className="fa-solid fa-circle-chevron-left main-image-button" id="left-main-button" onClick={e => handleMainArrowClick(e)} />
        }
        {currentMainIndex !== currentProductStyle.photos.length - 1 &&
          <i style={{color: '#FFF'}} className="fa-solid fa-circle-chevron-right main-image-button" id="right-main-button" onClick={e => handleMainArrowClick(e)}></i>
        }
        <img style={{ objectFit: 'contain', height: '90vh', width: '90vw', cursor: 'crosshair' }} alt={currentProductStyle.name} src={currentProductStyle.photos[currentMainIndex].url} />
        <button onClick={onClose}>X</button>
        {currentProductStyle.photos.map((photo, index) => {
          if (index === currentMainIndex) {
            return <i style={{color: 'rgb(255, 255, 128, 0.6)'}} key={index} className="fa-solid fa-circle dots" onClick={e => handleDotClick(index)} />
          } else{
            return <i style={{color: 'rgb(255, 255, 128, 0.6)'}} key={index} className="fa-regular fa-circle dots" onClick={e => handleDotClick(index)} />
          }
        })}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ImageModal;