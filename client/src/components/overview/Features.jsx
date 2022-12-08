import React, { useState, useEffect } from 'react';

const Features = ({ features }) => {

  return (
    <div className="grid-container" id="features">
      <div id="feature-grid">
        <div id="slogan">
          Slogan: {features.slogan}
          <p>
            Description: {features.description}
          </p>
        </div>

        <div id="feature-list">
          {features.features.map((feature, index) => {
            return <div key={index}>
              {feature.feature}: &nbsp;{feature.value}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Features