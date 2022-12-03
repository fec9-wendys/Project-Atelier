import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const PBEntry = ({charKey, charValue}) => {

  return (
    <div id='PB-entry'>
      {charKey}
      <div>
        {Math.round(charValue.value * 100) / 100}
      </div>
    </div>
  );
};

export default PBEntry;