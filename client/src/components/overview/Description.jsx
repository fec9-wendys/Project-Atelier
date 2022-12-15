import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DescriptionContainer } from './styles/OverviewContainers';

const Description = ({ currentProduct, currentProductStyle }) => {

  return (
    <DescriptionContainer>
      <h3 id="product-category">
        {currentProduct.category}
      </h3>
      <h1 id="product-name" style={{lineHeight: '2.4rem'}}>
        {currentProduct.name}
      </h1>
      <h3 id="product-style">Style &gt; {currentProductStyle.name}</h3>
      {currentProductStyle.sale_price ?
        <div className="product-price">
          <s>${currentProductStyle.original_price}</s>
          <span style={{ paddingLeft: 8, color: 'red' }} id="sale-price">${currentProductStyle.sale_price}</span>
        </div>
        :
        <div className="product-price">
          ${currentProductStyle.original_price}
        </div>
      }

    </DescriptionContainer>
  )
}

export default Description