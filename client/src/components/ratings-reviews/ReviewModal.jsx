import React from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import styled from 'styled-components';
const { useState, useEffect } = React;
import DynamicStars from './DynamicStars.jsx';
import CharEntry from './CharEntry.jsx';
import { ModalContainer, ModalTopContainer, ModalBottomContainer, ModalCharContainer, ModalNicknameContainer, ModalEmailContainer, ModalTitleContainer, ModalTopBottomContainer, ModalImageContainer} from './styles/Container';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '0px 25px 25px 100px',
  zIndex: 1000,

  width: '50vw',
  height: '80vh',


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

const ReviewModal = ({ isOpen, onClose, currentProduct, request, metaData, setReviews, chars }) => {
  const [rec, setRec] = useState(null);
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState([]);
  const [starRating, setStarRating] = useState(null);
  const [shownWord, setShownWord] = useState(null);
  const [charCount, setCharCount] = useState(50);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);

  useEffect(() => {
    setCharCount(Math.max(0, 50 - body.length));
  }, [body])

  if (!isOpen) {
    return null;
  }

  const closeHandler = (e) => {
    e.preventDefault();
    onClose();
    setImg([]);
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
    if (body.length < 50) {
      alert('Review Body must be at least 50 characters')
    } else if (starRating === null || rec === null || nickName === '' || email === '') {
      alert('Fill out mandatory fields');
    } else {
      const charRefs = {
        'size': size,
        'Width': width,
        'Comfort': comfort,
        'Quality': quality,
        'Length': length,
        'Fit': fit
      };

      let tempCharArray = [];
      for (let char in metaData.characteristics) {
        tempCharArray.push(char);
      }

      let charObj = {};
      for (let char in metaData.characteristics) {
        var charID = metaData.characteristics[char].id;
        for (let charEntry of tempCharArray) {
          if (char === charEntry) {
            charObj[charID] = charRefs[charEntry];
          }
        }
      }

      // checks for char inputs
      // for (let char in charObj) {
      //   if (charObj[char] === null) {
      //     alert('Fill out mandatory characteristics');
      //   }
      // }


      const doc = {
        product_id: currentProduct.id,
        rating: starRating,
        summary: summary,
        body: body,
        recommend: rec,
        name: nickName,
        email: email,
        photos: img,
        characteristics: charObj
      };

      request('/reviews', 'POST', doc, (err, results) => {
        if (!err) {
          console.log(results);
          request(`/reviews/?product_id=${currentProduct.id}&count=10000`, 'GET', {}, (err, results) => {
            if (err) {
              console.error(err);
            } else {
              setReviews(results.results);
            }
          });
        } else {
          console.error(err);
        }
      });

      onClose();

    }
  }

  return ReactDom.createPortal(
    <>
      <div className="modaloverlay" />
      <div id="reviewmodal">
        <div id="reviewtitlecontainer">

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="gooey">

                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
              </filter>
            </defs>
          </svg>
          <button className="gooey-button" id="answermodalbutton"> Review: {currentProduct.name}
            <span className="bubbles">
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
              <span className="bubble"></span>
            </span>
          </button>
        </div>

        <div>
          <h3 id="reviewmodalstars" style={{ 'marginBottom': '4px' }}>
            How do you rate this product?
          </h3>
          <div id="reviewmodalstars">
            <DynamicStars starRating={starRating} setStarRating={setStarRating} shownWord={shownWord} setShownWord={setShownWord} />

          </div>
          <div>
            <div className="reviewmodalbody">
              <form>

                <ModalTopContainer>
                  <ModalCharContainer>
                    {Object.keys(chars).map((key, index) => {
                      return <CharEntry key={index} charKey={key} setSize={setSize} setWidth={setWidth} setComfort={setComfort}
                        setQuality={setQuality} setLength={setLength} setFit={setFit} />;
                    })}

                    <p style={{ 'fontSize': 'large', 'marginBottom': '5px' }}>Do you recommend this product?</p>
                    <input type="radio" id="yes-button" name="rec" value='Yes' onChange={(e) => setRec(true)} required />
                    <label htmlFor='Yes'>Yes</label><br></br>
                    <input type="radio" id="no-button" name="rec" value='No' onChange={(e) => setRec(false)} />
                    <label htmlFor='No' style={{}}>No</label><br></br>
                  </ModalCharContainer>
                </ModalTopContainer>
                <button className="qamodalclose" id="reviewmodalclose" onClick={closeHandler}>X</button>
              </form>

              <ModalBottomContainer>


                <label >Nickname:</label><br></br>
                <input type="text" id="nickname" name="nickname" maxLength='60'
                  placeholder='jackson11!' required onChange={(e) => setNickName(e.target.value)} />
                <small><i>For privacy reasons, do not use your full name or email address</i></small>
                <br />
                <label >Email:</label><br></br>
                <input type="email" id="email" name="email" maxLength='60'
                  placeholder='jackson11@gmail.com' required onChange={(e) => setEmail(e.target.value)} />
                <small><i>For authentication reasons, you will not be emailed</i></small>
                <br />


                <label htmlFor="summary" > Summary: </label><br></br>

                <textarea className="modalinput2" maxLength='60' rows='6' cols='83'
                  placeholder='Best Purchase Ever!' onChange={(e) => setSummary(e.target.value)} /><br></br>
                <label htmlFor="body" > Review Body:</label><br></br>

                <textarea className="modalinput2" rows='6' cols='83' maxLength='1000'
                  placeholder='Why did you like the product or not?' onChange={(e) => setBody(e.target.value)} required /><br></br>
                <p id='char-requirement' > {charCount === 0 ? 'Minimum Reached' : `Minimum required characters left: ${charCount}`}</p>



                <label htmlFor="images" style={{ 'fontSize': 'small' }}> Image Uploads: (Up to 5) </label><br></br>
                <input id='image-upload' className='btn' type='file' onChange={fileHandler} multiple />
                &nbsp;
                <ModalImageContainer>
                  {img.map((image, index) => {
                    return <img key={index} src={image} alt= "review-photos" width={img ? '100' : '0'} height={img ? '100' : '0'}></img>
                  })}
                </ModalImageContainer>

              </ModalBottomContainer>

              <input id="reviewmodalsubmit" className="qamodalsubmitbtn" type="button" value="Submit Review" onClick={submitHandler} />
            </div>

          </div>
        </div>

      </div>
    </>,
    document.getElementById('portal')
  );
};

export default ReviewModal;
