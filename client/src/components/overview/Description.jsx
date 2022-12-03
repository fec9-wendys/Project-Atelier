import React, { useState, useEffect } from 'react';

const Description = ({ currentProduct, currentProductStyle }) => {

    console.log('i am currentProductStyle: ', currentProductStyle)
    return (
      <div>
        <h5>I am Product Description</h5>
        <div>I am product category: {currentProduct.category}</div>
        <div>I am product name: {currentProduct.name}</div>
        <div>I am current product style: {currentProductStyle.name}</div>
        {currentProductStyle.sale_price ?
        <div>I am default price: ${currentProductStyle.original_price}
        I am sale price: ${currentProductStyle.sale_price}</div>

          : <div>I am default price: ${currentProductStyle.original_price}</div>
        }

      </div>
    )
}

export default Description