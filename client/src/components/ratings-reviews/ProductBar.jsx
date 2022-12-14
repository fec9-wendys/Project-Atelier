import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const ProductBar = ({ charPercent }) => {

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
    left: 300 * charPercent
  };

  return (
    <div className="barsSection" style={barSectionStyle}>
      <div className="bar" style={barStyle}></div>
      <div className="bar" style={barStyle}></div>
      <div className="bar" style={barStyle}></div>
      <i className ="fa-solid fa-caret-down" style = {pointerStyle}></i>
    </div>
  );
};

export default ProductBar;