import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewFeed from './ReviewFeed.jsx';
import Sort from './Sort.jsx';
import DynamicStars from './DynamicStars.jsx';
import QuarterStars from './QuarterStars.jsx';
import {ParentContainer} from './styles/Container'


// eslint-disable-next-line react/prop-types
const RatingsReviews = ({ currentProduct, setCurrentProduct, request}) => {
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

  const sortValues = [
    {value: 'relevant', text: 'relevant'},
    {value: 'helpful', text: 'helpful'},
    {value: 'newest', text: 'newest'}
  ]

  const [sort, setSort] = useState(sortValues[0].value);

  useEffect(() => {

    console.log('MAIN USE EFFECT RAN')
    // if (currentProduct !== null && reviews.length === 0) {
      request(`/reviews/?product_id=${currentProduct.id}&count=10000`, 'GET', {}, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          console.log(results.results);
          setReviews(results.results);
          request(`/reviews/meta/?product_id=${currentProduct.id}`, 'GET', {}, (err, results) => {
            if (err) {
              console.error(err);
            } else {
              let totalReviewsCount = 0;
              let avgReviewsCount = 0;
              let recPercentCount = 0;
              console.log('RESULTS ARE', results);
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
    // }
  }, [currentProduct]);


  return (
    <ParentContainer>
      <RatingsBreakdown metaData = {metaData} reviews = {reviews} setReviews = {setReviews} request = {request}
      currentProduct = {currentProduct} filter = {filter} setFilter = {setFilter} shownFilter = {shownFilter}
      setShownFilter = {setShownFilter} QuarterStars = {QuarterStars} ratingStats={ratingStats} recStats = {recStats}
      avgReviews = {avgReviews} totalReviews = {totalReviews} recPercent = {recPercent}/>
      &nbsp;
      <ProductBreakdown currentProduct = {currentProduct} metaData = {metaData} chars = {chars} />
      &nbsp;
      <Sort currentProduct = {currentProduct} setReviews = {setReviews} reviews = {reviews} request = {request} filter = {filter}
      setFilter ={setFilter} setShownFilter = {setShownFilter} sort = {sort} setSort = {setSort} sortValues = {sortValues}/>
      &nbsp;
      <ReviewFeed reviews = {reviews} setReviews = {setReviews} currentProduct = {currentProduct} request = {request} metaData = {metaData} QuarterStars = {QuarterStars}/>
    </ParentContainer>
  );
};

export default RatingsReviews;
