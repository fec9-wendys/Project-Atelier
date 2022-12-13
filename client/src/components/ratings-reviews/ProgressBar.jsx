import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
const { useState, useEffect } = React;

const ProgressBar = ({ bgcolor, progress }) => {

  const StyledParent = styled.div`
  flex-grow: 1;
  height: 25px;
  width: 150px;
  opacity: 0.5;
  background-color: #CDA8F0;
  border-radius: 5px 0px 0px 5px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;

  &:hover {
    border: 1px solid #0000EE;
  }
  `

  // overflow: hidden;
  const StyledChild = styled.div`
    flex-grow: 1;
    height: 25px;
    width: ${progress}%;
    background-color: #661EA8;
    text-align: right;
    white-space: nowrap;
    display: inline-block;

    &:hover {
      border-left: 1px solid #0000EE;
    }
`

  return (
    <StyledParent>
      <StyledChild></StyledChild>
      {/* <div style={Childdiv}></div> */}
    </StyledParent>
  );
};

export default ProgressBar;