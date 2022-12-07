import React, { useState, useEffect } from 'react';

const Features = ({ features }) => {

    return (
      <div id="features">

        <div>
          Slogan: {features.slogan}
          <p>
          Description: {features.description}
          </p>
        </div>

        <div id="feature-list">
          {features.features.map((feature, index) => {
            return <div key={index}>
              I am feature name: {feature.feature} <br />
              I am feature value: {feature.value}
            </div>
          })}
        </div>

      </div>
    )
}

export default Features