import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const { useState, useEffect } = React;
import { SortContainer } from './styles/Container';

const Sort = ({ currentProduct, setReviews, reviews, request, filter, setFilter, setShownFilter, sort, setSort, sortValues }) => {

  const handleChange = (e) => {
    setSort(e.target.value);

    request(`/reviews/?product_id=${currentProduct.id}&sort=${e.target.value}&count=10000`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        if (filter.length === 0) {
          setReviews(results.results);
        } else {
          console.log(results.results);
          let reviewsCopy = [];
          let filteredCopy = [];
          for (let review of results.results) {
            reviewsCopy.push(review);
          }

          filteredCopy = reviewsCopy.filter(review => {
            if (filter.includes(review.rating)) {
              return review;
            }
          });

          setReviews(filteredCopy);

        }
      }
    });

  }

  return (
    <SortContainer>
      <div> </div>
      <strong>{reviews.length} reviews, sorted by </strong>
      <span>
        <select id={sort} className='dropdown' onChange={handleChange} >
          {sortValues.map(sortValue => {
            return (
              <option key={sortValue.value} value={sortValue.value}>
                {sortValue.text}
              </option>
            )
          })}
        </select>
      </span>
    </SortContainer>
  );
};

export default Sort;