import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const ProgressBar = ({bgcolor, progress, height}) => {

  const Parentdiv = {
    flexGrow: 1,
    height: height,
    width: '150px',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'inline-block'
  }

  const Childdiv = {
    flexGrow: 1,
    height: '20px',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 20,
    textAlign: 'right',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'inline-block'
  }

  const progresstext = {
    padding: 3,
    color: 'black',
    fontWeight: 300,
    display: 'inline-block'
  }

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
  );
};

export default ProgressBar;