import React from 'react';
import axios from 'axios';
import PBEntry from './PBEntry.jsx';
const {useState, useEffect} = React;

const ProductBreakdown = ({currentProduct, metaData}) => {
  console.log(metaData);

  if (metaData.length !== 0) {
    const productChars = Object.keys(metaData.characteristics);


  }

  return (
    <div id='products-breakdown'>

    </div>
  );
};

export default ProductBreakdown;