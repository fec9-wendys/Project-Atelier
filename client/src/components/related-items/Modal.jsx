import React from 'react';
const { useState, useEffect } = React;
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Overlay, Content, Close } from './styles/Modal.js';
import { Comparison, Column, Entry, Break } from './styles/Comparison.js';

const AModalTitle = styled.h1`

display:flex;
justify-content: center;
align-items: center;


`;

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
    <div>
      <Overlay />

      <Content>
      <AModalTitle>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">

                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>

    <button className="gooey-button"  id="answermodalbutton">Product Comparison

        <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    </button>
    </AModalTitle>

      <div className="qamodalbody" >

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
          <button className="qamodalclose" id="reviewmodalclose" onClick={onClose}>X</button>
          </Comparison>
          </div>
      </Content>

    </div>
  , document.getElementById('related-items-portal'));
}
