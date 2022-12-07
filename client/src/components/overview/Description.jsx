import React, { useState, useEffect } from 'react';

const Description = ({ currentProduct, currentProductStyle }) => {

  console.log('i am currentProductStyle: ', currentProductStyle)
  return (
    <div>
      <h5>
        I am Product Description
      </h5>
      <div id="product-category">
        {currentProduct.category}
      </div>
      <div id="product-name">
        {currentProduct.name}
      </div>
      <div id="product-style">
        {currentProductStyle.name}
      </div>
      {currentProductStyle.sale_price ?
        <div className="product-price">
          <s>${currentProductStyle.original_price}</s>
          ${currentProductStyle.sale_price}
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