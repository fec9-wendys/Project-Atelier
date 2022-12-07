import React from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
const {useState, useEffect} = React;
import Stars from './Stars.jsx';

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

const ReviewModal = ({isOpen, onClose, currentProduct, request}) => {
  const [rec, setRec] = useState(null);
  const [nickName, setNickName] = useState();
  const [summary, setSummary] = useState();
  const [body, setBody] = useState('');
  const [img, setImg] = useState(null);
  const [chars, setChars] = useState(50);


  useEffect(() => {
    setChars(Math.max(0, 50 - body.length));
  }, [body])

  if (!isOpen) {
    return null;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    request(`/reviews/?product_id=${currentProduct.id}`, 'POST')

  }

  const fileHandler = (e) => {
    const images = document.getElementById('image-upload').files[0];
    console.log(images);
  }

  return ReactDom.createPortal(
    <>
      <div style = {OVERLAY_STYLES} />
      <div id='review-modal' style = {MODAL_STYLES}>
        <h1> Write your Review </h1>
        <h2> about the {currentProduct.name}</h2>
        <div>
          How do you rate this product?
        </div>
        <div>
          <Stars />
        </div>
        <div>
          Do you recommend this product?
          <div>
            <button onClick = {() => { setRec(true)}} disabled = {rec === true}> Yes </button>
            <button onClick = {() => { setRec(false)}} disabled = {rec === false}> No </button>
            {rec === null ? null : (rec === true ? 'Yes' : 'No')}
          </div>
          <div>
            <form>
              <label htmlFor="nickname">Nickname:</label><br></br>
                <input type="text" id="nickname" name="nickname" maxLength = '60'
                placeholder = 'jackson11@gmail.com' required onChange = {(e) => setNickName(e.target.value)}/><br></br>
              <label htmlFor="summary"> Summary: </label><br></br>
                <input type="text" id="summary" name="summary" maxLength = '60'
                placeholder = 'Best Purchase Ever!' onChange = {(e) => setSummary(e.target.value)}/><br></br>
              <label htmlFor="body"> Review Body:</label><br></br>
                <textarea type="text" id="body" name="body" rows='6' cols='50' maxLength = '1000'
                placeholder = 'Best Purchase Ever!' onChange = {(e) => setBody(e.target.value)}/><br></br>
              <p id = 'char-requirement'> {chars === 0 ? 'Minimum Reached' : `Minimum required characters left: ${chars}`}</p>
              <label htmlFor="images"> Image Uploads: (Up to 5) </label><br></br>
                <input id = 'image-upload' type = 'file' onChange = {fileHandler} multiple/>
              <input type="button" value="Submit Review" onClick = {submitHandler} disabled = {body.length <= 50 || rec === null}/>
            </form>
          </div>
        </div>
        <button onClick = {onClose}>Close</button>
      </div>
    </>,
    document.getElementById('review-portal')
  );
};

export default ReviewModal;
