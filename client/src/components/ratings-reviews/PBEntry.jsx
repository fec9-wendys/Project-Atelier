import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;
import styled from 'styled-components';
import ProductBar from './ProductBar.jsx';

const Descriptions = styled.p`
  margin-bottom : 5px;
  margin-top  : 0;
  font-size : 14px;
`
const PB_Entries = styled.div`
  padding: 8px 0px;
`
const PB_Entries_Words = styled.div`
`

const PBEntry = ({charKey, charValue, isDarkMode}) => {
  const charRating = Math.round(charValue.value * 100) / 100;
  const charPercent = charRating / 5;

  return (
    <PB_Entries>
      &nbsp;&nbsp;&nbsp;{charKey}
        <ProductBar charPercent = {charPercent} isDarkMode = {isDarkMode}/>
        <PB_Entries_Words>
          {charKey === 'Fit' ? <Descriptions>&nbsp;&nbsp;&nbsp;&nbsp;Too Tight &emsp;&emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Too Long </Descriptions> : null}
          {charKey === 'Size' ? <Descriptions>&nbsp;&nbsp;&nbsp; Too narrow &emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Too wide </Descriptions> : null}
          {charKey === 'Width' ? <Descriptions>&nbsp;&nbsp;&nbsp; Too narrow &emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Too Long </Descriptions> : null}
          {charKey === 'Comfort' ? <Descriptions>&nbsp;&nbsp;&nbsp; Uncomfy &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Ok &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfect </Descriptions> : null}
          {charKey === 'Quality' ? <Descriptions>&nbsp;&nbsp;&nbsp; Poor &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Perfect </Descriptions> : null}
          {charKey === 'Length' ? <Descriptions>&nbsp;&nbsp;&nbsp; Too Short &emsp;&emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Too Long </Descriptions> : null}
        </PB_Entries_Words>
    </PB_Entries>
  );
};

export default PBEntry;