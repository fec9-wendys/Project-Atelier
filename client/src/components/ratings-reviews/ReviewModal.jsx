import React from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
const {useState, useEffect} = React;
import DynamicStars from './DynamicStars.jsx';
import CharEntry from './ReviewModal/CharEntry.jsx';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  height: '400px',
  overflow: 'auto'
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

const ReviewModal = ({isOpen, onClose, currentProduct, request, metaData}) => {
  const [rec, setRec] = useState(null);
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState([]);
  const [starRating, setStarRating] = useState(null);
  const [shownWord, setShownWord] = useState(null);
  const [chars, setChars] = useState(50);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);

  useEffect(() => {
    setChars(Math.max(0, 50 - body.length));
  }, [body])

  if (!isOpen) {
    return null;
  }

  const fileHandler = (e) => {
    if (img.length > 3) {
      document.getElementById('image-upload').disabled = true;
    }

    let tempArray = [...img];
    tempArray.push(URL.createObjectURL(e.target.files[0]));

    setImg(tempArray);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const doc = {
      product_id: currentProduct.id,
      rating: starRating,
      summary: summary,
      body: body,
      recommend: rec,
      name: nickName,
      email: email,
      photos: img,
      characteristics: {
        '14' : size,
        '15' : width,
        '16' : comfort,
        '17' : quality,
        '18' : length,
        '19' : fit
      }
    };

    // console.log(currentProduct.id);
    // console.log(starRating);
    // console.log(summary);
    // console.log(body);
    // console.log(rec);
    // console.log(nickName);
    // console.log(email);
    // console.log(img);
    // console.log(size);
    // console.log(width);
    // console.log(comfort);
    // console.log(quality);
    // console.log(length);
    // console.log(fit);

    // request('/reviews', 'POST', doc , (err, results) => {
    //   if (!err) {
    //     console.log(results);
    //   } else {
    //     console.error(err);
    //   }
    // });

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
          <DynamicStars starRating = {starRating} setStarRating = {setStarRating} shownWord= {shownWord} setShownWord = {setShownWord}/>
        </div>
        <div>
          <div>
            <form>
              Characteristics Review Component
              {Object.keys(metaData.characteristics).map((key, index) => {
                return <CharEntry key = {index} charKey = {key} setSize = {setSize} setWidth = {setWidth} setComfort = {setComfort}
                setQuality = {setQuality} setLength = {setLength} setFit = {setFit} />;
              })}
              <p>Do you recommend this product?</p>
                <input type="radio" id="yes-button" name="rec" value = 'Yes' onChange = {(e) => setRec(true)}/>
                  <label htmlFor = 'Yes'>Yes</label><br></br>
                <input type="radio" id="no-button" name="rec" value = 'No' onChange = {(e) => setRec(false)}/>
                  <label htmlFor = 'No'>No</label><br></br>
              <label htmlFor="nickname">Nickname:</label><br></br>
                <input type="text" id="nickname" name="nickname" maxLength = '60'
                placeholder = 'jackson11!' required onChange = {(e) => setNickName(e.target.value)}/><br></br>
              <div> For privacy reasons, do not use your full name or email address</div>
              <label htmlFor="email">Email:</label><br></br>
                <input type="text" id="email" name="email" maxLength = '60'
                placeholder = 'jackson11@gmail.com' required onChange = {(e) => setEmail(e.target.value)}/><br></br>
              <div> For authentication reasons, you will not be emailed</div>
              <label htmlFor="summary"> Summary: </label><br></br>
                <input type="text" id="summary" name="summary" maxLength = '60'
                placeholder = 'Best Purchase Ever!' onChange = {(e) => setSummary(e.target.value)}/><br></br>
              <label htmlFor="body"> Review Body:</label><br></br>
                <textarea type="text" id="body" name="body" rows='6' cols='50' maxLength = '1000'
                placeholder = 'Why did you like the product or not?' onChange = {(e) => setBody(e.target.value)}/><br></br>
              <p id = 'char-requirement'> {chars === 0 ? 'Minimum Reached' : `Minimum required characters left: ${chars}`}</p>
              <label htmlFor="images"> Image Uploads: (Up to 5) </label><br></br>
                <input id = 'image-upload' type = 'file' onChange = {fileHandler} multiple/>
                &nbsp;
                {img.map((image, index) => {
                  return <img key = {index} src = {image} width = {img ? '100' : '0'} height = {img ? '100' : '0'}/>
                })}
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