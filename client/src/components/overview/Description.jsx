import React, { useState, useEffect } from 'react';

const nameStyle = {
  fontSize: '2em',
  fontWeight: 'bolder'
}

const Description = ({ currentProduct, currentProductStyle }) => {

  return (
    <div className="grid-container" id="description">
      <div id="product-category">
        {currentProduct.category}
      </div>
      <div id="product-name" style={nameStyle}>
        {currentProduct.name}
      </div>
      <div id="product-style">
        <b>Style: &gt;</b> {currentProductStyle.name}
      </div>
      {currentProductStyle.sale_price ?
        <div className="product-price">
          <s>${currentProductStyle.original_price}</s>
          <span style={{paddingLeft: 8}}id="sale-price">${currentProductStyle.sale_price}</span>
        </div>
        :
        <div className="product-price">
          ${currentProductStyle.original_price}
        </div>
      }

    </div>
  )
}

export default Description