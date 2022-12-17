import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const { useState, useEffect } = React;
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewFeed from './ReviewFeed.jsx';
import Sort from './Sort.jsx';
import DynamicStars from './DynamicStars.jsx';
import QuarterStars from './QuarterStars.jsx';
import { ParentContainer, TitleContainer, LeftSide, RightSide, RFButtonsContainer, ReviewButtonsContainer } from './styles/Container';
import { ReviewButtons } from './styles/Reviewfeed';

const RatingsReviews = ({ currentProduct, setCurrentProduct, request, isDarkMode }) => {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [shownFilter, setShownFilter] = useState(filter);
  const [avgstars, setAvgStars] = useState();
  const [ratingStats, setRatingStats] = useState({});
  const [recStats, setRecStats] = useState([]);
  const [avgReviews, setAvgReviews] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [recPercent, setRecPercent] = useState(0);
  const [chars, setChars] = useState([]);
  const [shownReviews, setShownReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [reviewButton, setReviewButton] = useState('Show More Reviews');
  const [isOpen, SetIsOpen] = useState(false);

  const sortValues = [
    { value: 'relevant', text: 'relevant' },
    { value: 'helpful', text: 'helpful' },
    { value: 'newest', text: 'newest' }
  ]

  const [sort, setSort] = useState(sortValues[0].value);

  useEffect(() => {

    request(`/reviews/?product_id=${currentProduct.id}&count=1500`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        setReviews(results.results);
        request(`/reviews/meta/?product_id=${currentProduct.id}`, 'GET', {}, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            let totalReviewsCount = 0;
            let avgReviewsCount = 0;
            let recPercentCount = 0;
            setMetaData(results); // results object
            setRatingStats(results.ratings); // object of ratings for product
            setRecStats(results.recommended); // % percentage of recommended

            for (let key in results.ratings) {
              totalReviewsCount += parseInt(results.ratings[key]);
              avgReviewsCount += parseInt(key) * parseInt(results.ratings[key]);
            }

            avgReviewsCount = parseFloat((avgReviewsCount / totalReviewsCount).toFixed(1));

            const noCount = parseInt(results.recommended.false);
            const yesCount = parseInt(results.recommended.true);
            const totalCount = noCount + yesCount;
            recPercentCount = Math.round(yesCount / totalCount * 100);

            setRecPercent(recPercentCount);
            setTotalReviews(totalReviewsCount);
            setAvgReviews(avgReviewsCount);
            setChars(results.characteristics);
          }
        });

      }
    })
  }, [currentProduct]);

  const handleClick = () => {
    if (reviews.length > 2) {
      document.getElementById('more-reviews-btn').style.visibility = 'visible';
    }

    if (count > reviews.length - 2) {
      setReviewButton('Show Less Reviews');

    }

    if (reviewButton === 'Show Less Reviews') {
      setCount(0);
      setReviewButton('Show More Reviews');
    }

    setCount(previousCount => previousCount + 2);
  }

  const modalHandler = () => {
    SetIsOpen(true);
    const app = document.getElementById('app');
    app.style.overflow = 'hidden';

  }

  return (
    <div>
      <TitleContainer>Ratings & Reviews</TitleContainer>
      <div>
        <ParentContainer id='ratings-reviews'>
          <LeftSide>
            <RatingsBreakdown metaData={metaData} reviews={reviews} setReviews={setReviews} request={request}
              currentProduct={currentProduct} filter={filter} setFilter={setFilter} shownFilter={shownFilter}
              setShownFilter={setShownFilter} QuarterStars={QuarterStars} ratingStats={ratingStats} recStats={recStats}
              avgReviews={avgReviews} totalReviews={totalReviews} recPercent={recPercent} setShownReviews={setShownReviews}
              setCount={setCount} count={count} isDarkMode = {isDarkMode}/>
            &nbsp;
            <ProductBreakdown currentProduct={currentProduct} metaData={metaData} chars={chars} isDarkMode = {isDarkMode} />
          </LeftSide>
          &nbsp;
          <RightSide>
            <Sort currentProduct={currentProduct} setReviews={setReviews} reviews={reviews} request={request} filter={filter}
              setFilter={setFilter} setShownFilter={setShownFilter} sort={sort} setSort={setSort} sortValues={sortValues} />
            &nbsp;
            {/* <RFButtonsContainer></ReviewButtonsContainer> */}
            <ReviewFeed reviews={reviews} setReviews={setReviews} currentProduct={currentProduct}
              request={request} metaData={metaData} QuarterStars={QuarterStars} shownReviews={shownReviews}
              setShownReviews={setShownReviews} count={count} setCount={setCount} filter={filter}
              reviewButton={reviewButton} setReviewButton={setReviewButton} isOpen={isOpen} SetIsOpen={SetIsOpen} chars = {chars}
              isDarkMode = {isDarkMode}/>
            <ReviewButtonsContainer>
              {reviews.length > 2 ? <ReviewButtons  id='show-more-reviews-btn' className="addquestionbtn" onClick={handleClick}> {reviewButton} </ReviewButtons> : null}
              <ReviewButtons id='more-reviews-btn' className="addquestionbtn" onClick={() => SetIsOpen(true)}> + Add A Review </ReviewButtons>
            </ReviewButtonsContainer>
          </RightSide>
        </ParentContainer>
      </div>
    </div>
  );
};

export default RatingsReviews;
