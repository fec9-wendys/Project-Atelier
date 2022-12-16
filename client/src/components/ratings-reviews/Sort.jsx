import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const { useState, useEffect } = React;
import { SortContainer } from './styles/Container';

const SortWords = styled.span`
  font-size: large;
`

const SortFilter = styled.select`
  width: 120px;
  height: 30px;
  border: 1px solid #999;
  font-size: large;
  color: #1c87c9;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 4px 4px #ccc;
`
const dropExample = () => {

  return (
    <div className="container">
      <span className="choose">Choose Gender</span>

      <div className="dropdown">
        <div className="select">
          <span>Select Gender</span>
          <i className="fa fa-chevron-left"></i>
        </div>
        <input type="hidden" name="gender" />
        <ul className="dropdown-menu">
          <li id="male">Male</li>
          <li id="female">Female</li>
        </ul>
      </div>
    </div>
  )
}
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
      <SortWords>
        <strong>{reviews.length} reviews, sorted by </strong> &nbsp;
      </SortWords>
      <label className = 'custom-selector'>
        &nbsp;
        <select id= 'review-feed-dropdown' className='dropdown' onChange={handleChange} >
          {sortValues.map(sortValue => {
            return (
              <option key={sortValue.value} value={sortValue.value} className = 'option'>
                {sortValue.text}
              </option>
            )
          })}
        </select>
      </label>
    </SortContainer>
  );
};

export default Sort;

      // <div className="container">
      //     <span className="choose">Choose Gender</span>

      //     <div className="dropdown">
      //       <div className="select">
      //         <span>Select Gender</span>
      //         <i className="fa fa-chevron-left"></i>
      //       </div>
      //       <input type="hidden" name="gender" />
      //       <ul className="dropdown-menu">
      //         <li id="male">Male</li>
      //         <li id="female">Female</li>
      //       </ul>
      //     </div>
      //   </div>