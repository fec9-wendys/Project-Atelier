import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Overlay, Content, Close } from './styles/Modal.js';
import { Comparison, Category, Entry, Break } from './styles/Comparison.js';

export default function Modal({ isOpen, onClose, currentProduct, product }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Content>
        <Close onClick={onClose}>Close</Close>
        <Comparison>
          <Category>{currentProduct.name}</Category>
          <Category />
          <Category>{product.name}</Category>
          <Break />
          <Entry>{currentProduct.category}</Entry>
          <Entry>Category</Entry>
          <Entry>{product.category}</Entry>
          <Break />
          <Entry>{currentProduct.discount_price ? currentProduct.discount_price : currentProduct.default_price}</Entry>
          <Entry>Price</Entry>
          <Entry>{product.discount_price ? product.discount_price : product.default_price}</Entry>
          <Break />
        </Comparison>
      </Content>
    </>
  , document.getElementById('related-items-portal'));
}
