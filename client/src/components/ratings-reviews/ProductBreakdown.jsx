import React from 'react';
import axios from 'axios';
import PBEntry from './PBEntry.jsx';
const { useState, useEffect } = React;
import { PBContainer } from './styles/Container';

const ProductBreakdown = ({ currentProduct, metaData, chars }) => {

  return (
    <PBContainer>
      <div className='h1'>Product Breakdown Component</div>
      {Object.keys(chars).map((key, index) => {
        return <PBEntry key={index} charKey={key} charValue={chars[key]} />;
      })}
    </PBContainer>
  );
};

export default ProductBreakdown;