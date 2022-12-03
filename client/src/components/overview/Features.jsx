import React, { useState, useEffect } from 'react';

const Features = ({ features }) => {

    return (
      <div>
        <div>
          {console.log('I am features prop: ', features)}
          Slogan: {features.slogan}
          <p>
          Description: {features.description}
          </p>
        </div>
        <div>
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