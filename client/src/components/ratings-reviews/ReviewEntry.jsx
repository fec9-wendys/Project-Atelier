import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewImageModal from './ReviewImageModal.jsx';
import {EntriesLog} from './styles/Reviewfeed';
const {useState, useEffect} = React;

const ReviewEntry = ({review, request, currentProduct, setShownReviews, count, QuarterStars}) => {
  const [answerOnce, setAnswerOnce] = useState({ helpful: null, reported: null});
  const [reportText, setReportText] = useState('Report');
  const [shownBody, setShownBody] = useState(review.body.slice(0,250));
  const [imgOpen, setImgOpen] = useState(false);
  const [mainImg, setMainImg] = useState('');



  const properDate = () => {
    const date = new Date(review.date.substring(0,10)).toString();
    const date1 = date.slice(0,15);
    return date1;
  };

  const clickHelpHandler = (e) => {
    e.preventDefault();
    if (answerOnce.helpful === null) {
      request(`/reviews/${review.review_id}/helpful`, 'PUT', {}, (err, results) => {
        if (!err) {
          console.log('clickHelpHandler', results);
          setAnswerOnce({helpful: true, reported: null});
          request(`/reviews/?product_id=${currentProduct.id}&count=10000`, 'GET', {}, (err, results) => {
            if (!err) {
              setShownReviews(results.results.slice(0, count));
            } else {
              console.error(err);
            }
          })
        } else {
          console.error(err);
        }
      })
    }
  }

  const clickReportHandler = (e) => {
    e.preventDefault();

    if(answerOnce.reported === null) {
      request(`/reviews/${review.review_id}/report`, 'PUT', {}, (err, results) => {
        if (!err) {
          console.log('clickReportHandler', results);
          setAnswerOnce({helpful: answerOnce.helpful , reported: true});
          setReportText('Reported');
        } else {
          console.error(err);
        }
      })
    }
  }

  const imgClickHandler = (e) => {
    setImgOpen(true);
    setMainImg(e.target.src);
  }

  return (
    <div id='review-entry-container'>
      <QuarterStars rating = {review.rating} />
      <span className = 'entry-log body'> {review.reviewer_name}, {properDate()}</span>
      <p className = 'entry-summary body'> <strong>{review.summary}</strong> </p>
      <div className = 'entry-body body'> {review.body.length > 250 ? shownBody : review.body} </div>
      <div>
        {shownBody.length === 250 ?
        <button className = 'entry-body-button btn' onClick = {() => setShownBody(review.body)}> Show More </button> : null}
      </div>
      <p className = 'entry-rec body'> {review.recommend ? <span><i className="fa-solid fa-check"></i> I recommend this product</span>: null}</p>
      <p className = 'entry-response-header body'> {review.response === null ? null : 'Response from Seller:'}</p>
      <p className = 'entry-response-body body'>{review.response}</p>
      <div className = 'entry-photos'> {review.photos.map((image, index) => {
                  return <img key = {index} src = {image.url} width = {review.photos ? '100' : '0'}
                  height = {review.photos ? '100' : '0'} onClick = {imgClickHandler} />
                })}
      </div>
      <p className = 'body'>Helpful? <u onClick = {clickHelpHandler}>Yes</u> ({review.helpfulness}) | <u onClick = {clickReportHandler}>{reportText}</u> </p>
      <ReviewImageModal imgOpen = {imgOpen} onClose= {()=> setImgOpen(false)} mainImg = {mainImg}/>
    </div>
  );
};

export default ReviewEntry;