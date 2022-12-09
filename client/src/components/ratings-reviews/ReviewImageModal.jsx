import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: 0,
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

const ReviewImageModal = ({imgOpen, onClose, mainImg}) => {

  if (!imgOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}/>
      <div style={MODAL_STYLES} id="main-image-portal" className = 'modal'>
        {/* main image in modal */}
        <img style={{ objectFit: 'contain', height: '90vh', width: '90vw', cursor: 'crosshair' }} src= {mainImg} />

        <i className="fa-regular fa-circle-xmark" id="close-button" onClick={onClose}></i>

      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReviewImageModal;