import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FeaturesContainer, FeatureList } from './styles/OverviewContainers';

const Slogan = styled.span`
  padding-left: 0px;
  padding-top: 1vh;
  font-weight: bolder;
  font-size: 2em;
  font-style: italic;
`

const Paragraph = styled.p`
  padding-left = 0px;
`

const Features = ({ features }) => {

  return (
    <FeaturesContainer>
      <div id="summary">
        <Slogan>
          {features.slogan}
        </Slogan>
        <Paragraph>
          {features.description}
        </Paragraph>
      </div>

      <FeatureList>
        {features.features.map((feature, index) => {
          return <div key={index}>
            {feature.feature}: &nbsp;{feature.value} &nbsp; <i style={{ color: 'rgb(218, 39, 39)' }} className="fa-solid fa-check"></i>
          </div>
        })}
      </FeatureList>
    </FeaturesContainer>
  )
}

export default Features