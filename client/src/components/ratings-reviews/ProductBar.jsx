import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
const { useState, useEffect } = React;

const PointerStyle = styled.i`
  height: 20px;
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 307px;
  left: ${(charPercent) => charPercent * 300};
`

const ProductBar = ({ charPercent, isDarkMode }) => {
  let pointerColor = isDarkMode ? '#ED1C24' : 'black';

  const barSectionStyle = {
    display: "inline-flex",
    gap: "5px",
    width: "90%",
    position: "relative",
    padding: "12px",
  };

  const barStyle = {
    height: "7px",
    width: "100px",
    background: "lightgrey",
  };

  const pointerStyle = {
    height: '20px',
    display: "inline-block",
    position: "absolute",
    bottom: '10px',
    right: '307px',
    left: 300 * charPercent,
    color: pointerColor
  };

  // isDarkMode = {isDarkMode} charPercent = {charPercent}
  // <i className ="fa-solid fa-caret-down" style = {pointerStyle}></i>
  return (
    <div className="barsSection" style={barSectionStyle}>
      <div className="bar" style={barStyle}></div>
      <div className="bar" style={barStyle}></div>
      <div className="bar" style={barStyle}></div>
      <i className = 'fa-solid fa-caret-down' style = {pointerStyle}></i>
    </div>
  );
};

export default ProductBar;