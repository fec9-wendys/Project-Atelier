import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const {useState, useEffect} = React;

const Sort = ({reviews}) => {


  return (
    <div id='sort-list'>
      {reviews.length} reviews, sorted by
      <span>
        <select>
          <option value="relevance">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </span>
    </div>
  );
};

export default Sort;