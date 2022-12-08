import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewFeed from './ReviewFeed.jsx';
import Sort from './Sort.jsx';
import DynamicStars from './DynamicStars.jsx';


// eslint-disable-next-line react/prop-types
const RatingsReviews = ({ currentProduct, setCurrentProduct, request}) => {
  const [reviews, setReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [shownFilter, setShownFilter] = useState(filter);
  const [avgstars, setAvgStars] = useState();

  const sortValues = [
    {value: 'relevant', text: 'relevant'},
    {value: 'helpful', text: 'helpful'},
    {value: 'newest', text: 'newest'}
  ]

  const [sort, setSort] = useState(sortValues[0].value);

  useEffect(() => {
    if (currentProduct !== null && reviews.length === 0) {
      request(`/reviews/?product_id=${currentProduct.id}&count=10000`, 'GET', {}, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          request(`/reviews/meta/?product_id=${currentProduct.id}`, 'GET', {}, (err, results) => {
            if (err) {
              console.error(err);
            } else {
              console.log(results);
              setMetaData(results);
            }
          });

          console.log(results.results);
          setReviews(results.results);
        }
      })
    }
  }, [])

  return (
    <div id='ratings-reviews'>
      Ratings and Reviews Component
      <RatingsBreakdown metaData = {metaData} reviews = {reviews} setReviews = {setReviews} request = {request}
      currentProduct = {currentProduct} filter = {filter} setFilter = {setFilter} shownFilter = {shownFilter}
      setShownFilter = {setShownFilter}/>
      &nbsp;
      <ProductBreakdown currentProduct = {currentProduct} metaData = {metaData} />
      &nbsp;
      <Sort currentProduct = {currentProduct} setReviews = {setReviews} reviews = {reviews} request = {request} filter = {filter}
      setFilter ={setFilter} setShownFilter = {setShownFilter} sort = {sort} setSort = {setSort} sortValues = {sortValues}/>
      &nbsp;
      <ReviewFeed reviews = {reviews} currentProduct = {currentProduct} request = {request} metaData = {metaData}/>
    </div>
  );
};

export default RatingsReviews;
