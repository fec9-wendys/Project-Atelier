import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;
import styled from 'styled-components';
import ProductBar from './ProductBar.jsx';

const PBEntry = ({charKey, charValue}) => {
  const charRating = Math.round(charValue.value * 100) / 100;

  return (
    <div id='PB-entry' style = {{'padding' : '8px 0px'}}>
      {charKey}
      <div className = ''>
        <ProductBar />
        <div className = 'product-breakdown-entry-words'>
          {charKey === 'Fit' ? 'Runs Tight Perfect Runs Long' : null}
          {charKey === 'Size' ? 'Too narrow Perfect A size too wide' : null}
          {charKey === 'Width' ? 'Too narrow Perfect Runs Long' : null}
          {charKey === 'Comfort' ? 'Uncomfortable Ok Perfect' : null}
          {charKey === 'Quality' ? 'Poor Perfect' : null}
          {charKey === 'Length' ? 'Runs Short Perfect Runs Long' : null}
        </div>
      </div>
    </div>
  );
};

export default PBEntry;