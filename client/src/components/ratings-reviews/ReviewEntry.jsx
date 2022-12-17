import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewImageModal from './ReviewImageModal.jsx';
import styled from 'styled-components';
import { EntriesLog, EntriesPhotos } from './styles/Reviewfeed';
import { ReviewEntryContainer } from './styles/Container';
const { useState, useEffect } = React;

const ReviewEntryBody = styled.p`
  max-width: 800px;
  overflow-wrap : break-word;
  margin-top : 4px;
`

const ReviewEntry = ({ review, request, currentProduct, setShownReviews, count, QuarterStars, filter, isDarkMode }) => {
  const [answerOnce, setAnswerOnce] = useState({ helpful: null, reported: null });
  const [reportText, setReportText] = useState('Report');
  const [shownBody, setShownBody] = useState(review.body.slice(0, 250));
  const [imgOpen, setImgOpen] = useState(false);
  const [mainImg, setMainImg] = useState('');



  const properDate = () => {
    const date = new Date(review.date.substring(0, 10)).toString();
    const date1 = date.slice(0, 15);
    return date1;
  };

  const clickHelpHandler = (e) => {
    e.preventDefault();
    if (answerOnce.helpful === null) {
      request(`/reviews/${review.review_id}/helpful`, 'PUT', {}, (err, results) => {
        if (!err) {
          console.log('clickHelpHandler', results);
          setAnswerOnce({ helpful: true, reported: null });
          request(`/reviews/?product_id=${currentProduct.id}&count=10000`, 'GET', {}, (err, results) => {
            if (!err) {
              if (filter.length === 0) {
                setShownReviews(results.results.slice(0, count));

              } else {
                let reviewsCopy = [];
                let filteredCopy = [];
                for (let review of results.results) {
                  reviewsCopy.push(review);
                }

                filteredCopy = reviewsCopy.filter(review => {
                  if (filter.includes(review.rating)) {
                    return review;
                  }
                })

                setShownReviews(filteredCopy.slice(0, count));
              }
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

    if (answerOnce.reported === null) {
      request(`/reviews/${review.review_id}/report`, 'PUT', {}, (err, results) => {
        if (!err) {
          console.log('clickReportHandler', results);
          setAnswerOnce({ helpful: answerOnce.helpful, reported: true });
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
    <ReviewEntryContainer>
      <QuarterStars rating={review.rating} isDarkMode={isDarkMode} />
      <div className='entry-log body'>
        <span> <i className="fa-solid fa-circle-check"></i> {review.reviewer_name}</span>
      </div>
      <p className='entry-summary body' style={{ 'marginBottom': '4px', 'marginTop': '24px', 'fontSize': 'large', 'paddingRight': '5px' }}> <strong>{review.summary}</strong> <span style={{ 'float': 'right' }}> {properDate()} </span> </p>
      <ReviewEntryBody>
        {review.body.length > 250 ? shownBody : review.body}
      </ReviewEntryBody>
      <div>
        {shownBody.length === 250 ?
          <button className="loadmoreanswersbutton" onClick={() => setShownBody(review.body)}> Show More </button> : null}
      </div>
      {review.recommend ? <p><i className="fa-solid fa-check"></i> I recommend this product</p> : null}
      {review.response === null ? null : <div style={{ 'backgroundColor': 'lightgrey', 'display': 'inline-block' }}>Response from Seller: <div>{review.response}</div></div>}
      <div> {review.photos.map((image, index) => {
        return <EntriesPhotos key={index} src={image.url} width={review.photos ? '100' : '0'}
          height={review.photos ? '100' : '0'} onClick={imgClickHandler} />
      })}
      </div>
      <p className='body'>Helpful? <u onClick={clickHelpHandler}>Yes</u> ({review.helpfulness}) | <u onClick={clickReportHandler}>{reportText}</u> </p>
      <ReviewImageModal imgOpen={imgOpen} onClose={() => setImgOpen(false)} mainImg={mainImg} />
    </ReviewEntryContainer>
  );
};

export default ReviewEntry;