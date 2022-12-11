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


const PBEntry = ({charKey, charValue}) => {
  const charRating = Math.round(charValue.value * 100) / 100;
  const charPercent = charRating / 5;

  return (
    <div id='PB-entry' style = {{'padding' : '8px 0px'}}>
      &nbsp;&nbsp;&nbsp;{charKey}
      <div className = ''>
        <ProductBar charPercent = {charPercent}/>
        <div className = 'product-breakdown-entry-words'>
          {charKey === 'Fit' ? <Descriptions>&nbsp;&nbsp;&nbsp;&nbsp;Too Tight &emsp;&emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;Too Long </Descriptions> : null}
          {charKey === 'Size' ? <Descriptions>&nbsp;&nbsp;&nbsp; Too narrow &emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Too wide </Descriptions> : null}
          {charKey === 'Width' ? <Descriptions>&nbsp;&nbsp;&nbsp; Too narrow &emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Too Long </Descriptions> : null}
          {charKey === 'Comfort' ? <Descriptions>&nbsp;&nbsp;&nbsp; Uncomfy &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Ok &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfect </Descriptions> : null}
          {charKey === 'Quality' ? <Descriptions>&nbsp;&nbsp;&nbsp; Poor &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Perfect </Descriptions> : null}
          {charKey === 'Length' ? <Descriptions>&nbsp;&nbsp;&nbsp; Too Short &emsp;&emsp;&emsp;&emsp;&emsp;Perfect &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Too Long </Descriptions> : null}
        </div>
      </div>
    </div>
  );
};

export default PBEntry;