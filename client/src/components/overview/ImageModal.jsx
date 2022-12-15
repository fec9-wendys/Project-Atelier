import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DotIcons } from './styles/OverviewContainers';

const MODAl_STYLES = {
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

const ImageModal = ({ children, open, onClose, currentMainIndex, currentProductStyle, handleMainArrowClick, setCurrentMainIndex },
  width = '80vw',
  height = '80vh',
  magnifierHeight = 200,
  magnifieWidth = 200,
  zoomLevel = 2.5) => {

  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleDotClick = (index) => {
    setCurrentMainIndex(index);
  }

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />

        {/* image carousel buttons */}
        {currentMainIndex !== 0 &&
          <i className="fa-solid fa-circle-chevron-left main-image-button" id="left-modal-button" onClick={e => handleMainArrowClick(e)} />
        }
        {currentMainIndex !== currentProductStyle.photos.length - 1 &&
          <i className="fa-solid fa-circle-chevron-right main-image-button" id="right-modal-button" onClick={e => handleMainArrowClick(e)}></i>
        }

      <div style={MODAl_STYLES} className="modal" id="main-image-portal">

        {/* Zoom Magnifying Glass Image */}
        <div
          style={{
            position: "relative",
            objectFit: 'contain',
            height: height,
            width: width
          }}
        >
          <img
            src={currentProductStyle.photos[currentMainIndex].url}
            style={{ height: height, width: width }}
            onMouseEnter={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
            }}
            onMouseMove={(e) => {
              // update cursor position
              const elem = e.currentTarget;
              const { top, left } = elem.getBoundingClientRect();

              // calculate cursor position on the image
              const x = e.pageX - left - window.pageXOffset;
              const y = e.pageY - top - window.pageYOffset;
              setXY([x, y]);
            }}
            onMouseLeave={() => {
              // close magnifier
              setShowMagnifier(false);
            }}
            alt={"img"}
          />

          {/* Magnification */}
          <div
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",

              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier
              height: `${magnifierHeight}px`,
              width: `${magnifieWidth}px`,
              // move element center to cursor pos
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifieWidth / 2}px`,
              opacity: "1", // reduce opacity so you can verify position
              border: "1px solid lightgray",
              backgroundColor: "white",
              backgroundImage: `url('${currentProductStyle.photos[currentMainIndex].url}')`,
              backgroundRepeat: "no-repeat",

              //calculate zoomed image size
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                }px`,

              //calculate position of zoomed image.
              backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
            }}
          ></div>
        </div>

        {/* close button */}
        <i className="fa-regular fa-circle-xmark" id="close-button" onClick={onClose}></i>

        {/* bottom dot icons */}
        <DotIcons>
          {currentProductStyle.photos.map((photo, index) => {
            if (index === currentMainIndex) {
              return <i style={{ color: 'rgb(255, 255, 128, 0.6)' }} key={index} className="fa-solid fa-circle dots" onClick={e => handleDotClick(index)} />
            } else {
              return <i style={{ color: 'rgb(255, 255, 128, 0.6)' }} key={index} className="fa-regular fa-circle dots" onClick={e => handleDotClick(index)} />
            }
          })}
        </DotIcons>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ImageModal;