import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;

const LOG_STYLES = {
  position: 'relative',
  top: 0,
  right: 0,
}

const ReviewEntry = ({review, request, currentProduct, setShownReviews, count}) => {
  const [answerOnce, setAnswerOnce] = useState({ helpful: null, reported: null});
  const [reportText, setReportText] = useState('Report');
  const [shownBody, setShownBody] = useState(review.body.slice(0,250));



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

  return (
    <div id='review-entry'>
      <span className = 'entry-stars'> {review.rating} Stars</span>
      <span className = 'entry-log' style = {LOG_STYLES}> {review.reviewer_name}, {properDate()}</span>
      <div className = 'entry-summary'> <strong>{review.summary}</strong> </div>
      <div className = 'entry-body'> {review.body.length > 250 ? shownBody : review.body} </div>
      <div>
        {shownBody.length === 250 ?
        <button className = 'entry-body-button' onClick = {() => setShownBody(review.body)}> Show More </button> : null}
      </div>
      <p className = 'entry-rec'> {review.recommend ? '✔️ I recommend this product' : null}</p>
      <p className = 'entry-response-header'> {review.response === null ? null : 'Response from Seller:'}</p>
      <p className = 'entry-response-body'>{review.response}</p>
      <div className = 'entry-photos'> {review.photos.map((image, index) => {
                  return <img key = {index} src = {image.url} width = {review.photos ? '100' : '0'} height = {review.photos ? '100' : '0'}/>
                })}
      </div>
      <p>Helpful? <u onClick = {clickHelpHandler}>Yes</u> ({review.helpfulness}) | <u onClick = {clickReportHandler}>{reportText}</u> </p>
    </div>
  );
};

export default ReviewEntry;