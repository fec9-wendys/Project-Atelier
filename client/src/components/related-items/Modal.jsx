import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Overlay, Content, Close } from './styles/Modal.js';
import { Comparison, Column, Entry, Break } from './styles/Comparison.js';

export default function Modal({ isOpen, onClose, currentProductFeatures, product, request }) {
  if (!isOpen) return null;

  const features = [];
  currentProductFeatures.features.forEach(({ feature, value }) => features.push([value, feature, product.features[feature]?.value]));
  product.features.forEach(({ feature, value }) => features.push([currentProductFeatures.features[feature]?.value, feature, value]));

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Content>
        <Close onClick={onClose}><i className="fa-solid fa-x" /></Close>
        <Comparison>
          <Column>
            <Entry bold>{currentProductFeatures.name}</Entry>
            {features.map((feature, key) => <Entry key={key}>{feature[0] ?? <i className="fa-solid fa-x" />}</Entry>)}
          </Column>
          <Column>
             <Entry bold>&nbsp;</Entry>
            {features.map((feature, key) => <Entry key={key}>{feature[1]}</Entry>)}
          </Column>
          <Column>
             <Entry bold>{product.name}</Entry>
            {features.map((feature, key) => <Entry key={key}>{feature[2] ?? <i className="fa-solid fa-x" />}</Entry>)}
          </Column>
          </Comparison>
      </Content>
    </>
  , document.getElementById('related-items-portal'));
}
