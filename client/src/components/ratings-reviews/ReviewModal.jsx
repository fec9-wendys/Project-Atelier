import React from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
const {useState, useEffect} = React;

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000

}

const ReviewModal = ({isOpen, onClose, currentProduct}) => {
  const [rec, setRec] = useState();

  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div style = {OVERLAY_STYLES} />
      <div id='review-modal' style = {MODAL_STYLES}>
        <h1> Write your Review </h1>
        <h2> about the {currentProduct.name}</h2>
        <div>
          Do you recommend this product?
          <div>
            <button onClick = {() => { setRec(true)}} disabled = {rec === true}> Yes </button>
            <button onClick = {() => { setRec(false)}} disabled = {rec === false}> No </button>
            {rec === true ? 'Yes' : 'No'}
          </div>
          <div>
            <form>
              <label htmlFor="nickname">Nickname:</label><br></br>
                <input type="text" id="nickname" name="nickname" maxLength = '60' placeholder = 'jackson11@gmail.com' required /><br></br>
              <label htmlFor="summary"> Summary: </label><br></br>
                <input type="text" id="summary" name="summary" maxLength = '60' placeholder = 'Best Purchase Ever!' /><br></br>
              <label htmlFor="body"> Review Body: </label><br></br>
                <textarea type="text" id="body" name="body" rows='4' cols='50' maxLength = '1000' placeholder = 'Best Purchase Ever!' /><br></br>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <button onClick = {onClose}>Close Review Creation</button>
      </div>
    </>,
    document.getElementById('review-portal')
  );
};

export default ReviewModal;
