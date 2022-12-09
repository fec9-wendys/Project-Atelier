import React from 'react';
import axios from 'axios';
import PBEntry from './PBEntry.jsx';
const {useState, useEffect} = React;
import {PBContainer} from './styles/Container';

const ProductBreakdown = ({currentProduct, metaData, chars}) => {

  return (
    <PBContainer>
      Product Breakdown Component
      {Object.keys(chars).map((key, index) => {
        return <PBEntry key = {index} charKey = {key} charValue = {chars[key]}/>;
      })}
    </PBContainer>
  );
};

export default ProductBreakdown;