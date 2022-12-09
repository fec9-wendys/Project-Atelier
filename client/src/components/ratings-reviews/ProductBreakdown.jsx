import React from 'react';
import axios from 'axios';
import PBEntry from './PBEntry.jsx';
const {useState, useEffect} = React;
import {PBContainer} from './styles/Container';

const ProductBreakdown = ({currentProduct, metaData}) => {
  const [chars, setChars] = useState([]);

  if (metaData.length !== 0 && chars.length === 0) {
    setChars(metaData.characteristics);
  }

  // useEffect(() => {
  //   setChars(metaData.characteristics);
  // },[currentProduct])

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