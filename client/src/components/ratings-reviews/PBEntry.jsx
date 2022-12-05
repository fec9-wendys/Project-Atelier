import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const PBEntry = ({charKey, charValue}) => {

  return (
    <div id='PB-entry'>
      {charKey}
      <div>
        {Math.round(charValue.value * 100) / 100}
        <div>
          {charKey === 'Fit' ? 'Runs Tight : Perfect : Runs Long' : null}
          {charKey === 'Size' ? 'Too narrow : Perfect : A size too wide' : null}
          {charKey === 'Width' ? 'Too narrow : Perfect : Runs Long' : null}
          {charKey === 'Comfort' ? 'Uncomfortable : Ok : Perfect' : null}
          {charKey === 'Quality' ? 'Poor : What I Expected : Perfect' : null}
          {charKey === 'Length' ? 'Runs Short : Perfect : Runs Long' : null}
        </div>
      </div>
    </div>
  );
};

export default PBEntry;