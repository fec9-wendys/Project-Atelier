import React from 'react';
import axios from 'axios';
import PBEntry from './PBEntry.jsx';
const { useState, useEffect } = React;
import { PBContainer, RBRFTitle } from './styles/Container';

const ProductBreakdown = ({ currentProduct, metaData, chars, isDarkMode }) => {

  // <PBContainer>
  return (
    <div className = 'product-breakdown'>
      <RBRFTitle>Features</RBRFTitle>
      {Object.keys(chars).map((key, index) => {
        return <PBEntry key={index} charKey={key} charValue={chars[key]} isDarkMode = {isDarkMode} />;
      })}
    </div>
  );
};

export default ProductBreakdown;