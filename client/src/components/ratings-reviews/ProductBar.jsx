import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const ProductBar = ({ }) => {

  const barSectionStyle = {
    display: "inline-flex",
    gap: "5px",
    // justifyContent: "space-between",
    width: "100%",
    position: "relative",
    padding: "10px",
  };

  const barStyle = {
    height: "6px",
    width: "100px",
    background: "lightgrey",
  };

  // const ballStyle = {
  //   height: "25px",
  //   width: "25px",
  //   borderRadius: "50%",
  //   background: "red",
  //   display: "inline-block",
  //   position: "absolute",
  //   top: 10,
  //   left: 175.5 * percentage - 14.5, // -14.5 // 161                                 //175.5
  // };

  return (
    <div className="barsSection" style={barSectionStyle}>
      <div className="bar" style={barStyle}></div>
      <div className="bar" style={barStyle}></div>
      <div className="bar" style={barStyle}></div>
      {/* <div className="ball" style={ballStyle} /> */}
    </div>
  );
};

export default ProductBar;