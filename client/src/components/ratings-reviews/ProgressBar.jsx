import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const ProgressBar = ({bgcolor, progress, height}) => {

  const Parentdiv = {
    height: height,
    width: '150px',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }

  const Childdiv = {
    height: '20px',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 10,
    textAlign: 'right',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }

  const progresstext = {
    padding: 3,
    color: 'black',
    fontWeight: 300
  }

  return (
    <span style={Parentdiv}>
      <span style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </span>
    </span>
  );
};

export default ProgressBar;