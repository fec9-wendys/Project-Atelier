import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;

const Sort = ({currentProduct, setReviews, reviews, request}) => {

  const sortValues = [
    {value: 'relevant', text: 'relevant'},
    {value: 'helpful', text: 'helpful'},
    {value: 'newest', text: 'newest'}
  ]

  const [sort, setSort] = useState(sortValues[0].value);


  // https:app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40346&sort=helpful

  // select onChange="myFunction(this.options[this.selectedIndex].value)"

  const handleChange = (e) => {
    setSort(e.target.value);

    request(`/reviews/?product_id=${currentProduct.id}&sort=${e.target.value}`, 'GET', {}, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results.results);
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