import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FeaturesContainer } from './styles/OverviewContainers';

const Slogan = styled.span`
  font-weight: bolder;
  font-size: 2em;
  font-style: italic;
`

const Features = ({ features }) => {

  return (
    <FeaturesContainer>
      <div id="summary">
        <Slogan>
          {features.slogan}
        </Slogan>
        <p>
          {features.description}
        </p>
      </div>

      <div id="feature-list">
        {features.features.map((feature, index) => {
          return <div key={index}>
            {feature.feature}: &nbsp;{feature.value} &nbsp; <i style={{ color: 'rgb(218, 39, 39)' }} className="fa-solid fa-check"></i>
          </div>
        })}
      </div>
    </FeaturesContainer>
  )
}

export default Features