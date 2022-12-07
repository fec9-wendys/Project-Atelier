import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;

const Sort = ({currentProduct, setReviews, reviews, request, setFilter, setShownFilter}) => {

  const sortValues = [
    {value: 'relevant', text: 'relevant'},
    {value: 'helpful', text: 'helpful'},
    {value: 'newest', text: 'newest'}
  ]

  const [sort, setSort] = useState(sortValues[0].value);

  const handleChange = (e) => {
    setSort(e.target.value);

    request(`/reviews/?product_id=${currentProduct.id}&sort=${e.target.value}&count=10000`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results.results);
        setShownFilter([]);
        setFilter([]);
        setReviews(results.results);
      }
    });

  }

  return (
    <div id='sort-list'>
      <div> </div>
      <strong>{reviews.length} reviews, sorted by </strong>
      <span>
        <select id = {sort} onChange = {handleChange} >
          {sortValues.map(sortValue => {
            return (
              <option key = {sortValue.value} value = {sortValue.value}>
                {sortValue.text}
              </option>
              )
          })}
        </select>
      </span>
    </div>
  );
};

export default Sort;