import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Overlay, Content, Close } from './styles/Modal.js';
import { Comparison, Category, Entry, Break } from './styles/Comparison.js';

export default function Modal({ isOpen, onClose, currentProductFeatures, product, request }) {
  if (!isOpen) return null;

  const features = [];
  currentProductFeatures.features.forEach(({ feature, value }) => features.push([value, feature, product.features[feature]?.value]));
  product.features.forEach(({ feature, value }) => features.push([currentProductFeatures.features[feature]?.value, feature, value]));
  console.log(features);

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Content>
        <Close onClick={onClose}>Close</Close>
        <Comparison>
          <Category>{currentProductFeatures.name}</Category>
          <Category />
          <Category>{product.name}</Category>
          <Break />
          {features.map((comparison, key) => (
            <>
              <Entry>{!comparison[0] ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-check"></i>}</Entry>
              <Entry>{comparison[1]}</Entry>
              <Entry>{!comparison[2] ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-check"></i>}</Entry>
              <Break />
            </>
          ))}
        </Comparison>
      </Content>
    </>
  , document.getElementById('related-items-portal'));
}
