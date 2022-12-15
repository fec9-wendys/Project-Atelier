import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
const { useState, useEffect } = React;


// #CDA8F0
// opacity: 0.5;
const StyledParent = styled.div`
flex-grow: 1;
height: 25px;
width: 150px;
background-color: #FF7B7B;
border-radius: 5px 0px 0px 5px;
white-space: nowrap;
display: inline-block;
overflow: hidden;

&:hover {
  border: 1px solid #0000EE;
}
`
// #661EA8;
// overflow: hidden;
// animation: progressBar 3s ease-in-out;
// animation-fill-mode:both;
const StyledChild = styled.div`
  display: inline-block;
  flex-grow: 1;
  height: 25px;
  width: ${({progress}) => progress}%;
  background-color: #ED1C24;

  &:hover {
    border-left: 1px solid #0000EE;
  }
`

const ProgressBar = ({ bgcolor, progress }) => {


  return (
    <StyledParent>
      <StyledChild progress = {progress}></StyledChild>
      {/* <div style={Childdiv}></div> */}
    </StyledParent>
  );
};

export default ProgressBar;