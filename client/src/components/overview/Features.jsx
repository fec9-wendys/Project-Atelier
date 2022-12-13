import React, { useState, useEffect } from 'react';

const Features = ({ features }) => {

  return (
    <div className="grid-container" id="features">
      <div id="summary">
        <span id="slogan">{features.slogan}</span>
        <p>
          {features.description}
        </p>
      </div>

      <div id="feature-list">
        {features.features.map((feature, index) => {
          return <div key={index}>
            {feature.feature}: &nbsp;{feature.value} &nbsp; <i className="fa-solid fa-check"></i>
          </div>
        })}
      </div>
    </div>
  )
}

export default Features