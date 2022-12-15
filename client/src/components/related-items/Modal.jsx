import React from 'react';
const { useState, useEffect } = React;
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Overlay, Content, Close } from './styles/Modal.js';
import { Comparison, Column, Entry, Break } from './styles/Comparison.js';

export default function Modal({ isOpen, onClose, currentProductFeatures, product, request }) {
  const [comparison, setComparison] = useState([]);

  const indexOfFeature = (features, feature) => features.reduce((accumulator, current, i) => {
    if (accumulator === -1) {
      return current[1] === feature ? i : -1;
    }
    return accumulator;
  }, -1);

  useEffect(() => {
    if (isOpen) {
      const features = [];
      currentProductFeatures.features.forEach(({ feature, value}) => features.push([value, feature, undefined]));
      product.features.forEach(({ feature, value }) => {
        const existingFeature = indexOfFeature(features, feature);
        if (existingFeature === -1) {
          features.push([undefined, feature, value]);
        } else {
          features[existingFeature][2] = value;
        }
      });
      console.log(features);
      setComparison(features);
    } else {
      setComparison([]);
    }
  }, [isOpen]);

  return !isOpen ? null : ReactDOM.createPortal(
    <>
      <Overlay />
      <Content>
        <Close onClick={onClose}><i className="fa-solid fa-x" /></Close>
        <Comparison>
          <Column>
            <Entry bold>{currentProductFeatures.name}</Entry>
            {comparison.map((feature, key) => <Entry key={key}>{feature[0] ?? <i className="fa-solid fa-x" />}</Entry>)}
          </Column>
          <Column>
             <Entry bold>&nbsp;</Entry>
            {comparison.map((feature, key) => <Entry key={key}>{feature[1]}</Entry>)}
          </Column>
          <Column>
             <Entry bold>{product.name}</Entry>
            {comparison.map((feature, key) => <Entry key={key}>{feature[2] ?? <i className="fa-solid fa-x" />}</Entry>)}
          </Column>
          </Comparison>
      </Content>
    </>
  , document.getElementById('related-items-portal'));
}
