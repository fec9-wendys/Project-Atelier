import React from 'react';
import axios from 'axios';
const {useState, useEffect} = React;

const ProgressBar = ({bgcolor, progress, height}) => {

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 40,
    margin: 50
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'left'
  }

  const progresstext = {
    padding: 10,
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