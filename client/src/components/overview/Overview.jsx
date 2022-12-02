import React, { useEffect, useState, useMemo } from 'react';

import AddCart from './AddCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import Features from './Features.jsx';
import Reviews from './Reviews.jsx';
import Description from './Description.jsx';
import Images from './Images.jsx';

const Overview = ({ currentProduct, request, currentProductStyle, setCurrentProductStyle }) => {

  const [ratings, setRatings] = useState([]);
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState(null)


  //This behemouth code is grabbing all needed data from API (requested styles, features, and ratings)
  if (currentProduct !== null && features === null) {
    request(`/products/${currentProduct.id}`, 'GET', {}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        setFeatures(response);

        if (styles.length === 0) {
          request(`/products/${currentProduct.id}/styles`, 'GET', {}, (err, response) => {
            if (err) {
              console.log(err);
            } else {
              setStyles(response.results);
              setCurrentProductStyle(response.results[0]);

              if (ratings.length === 0) {
                request(`/reviews/?product_id=${currentProduct.id}`, 'GET', {}, (err, response) => {
                  if (err) {
                    console.log(err);
                  } else {
                    setRatings(response.results.map(result => {
                      return result.rating;
                    }));
                  }
                })
              }
            }
          })
        }
      }
    })
  }



  return (
    <div id="overview">
      <Images currentProductStyle={currentProductStyle} />
      <Reviews ratings={ratings} />
      <Description currentProduct={currentProduct} currentProductStyle={currentProductStyle}/>
      <StyleSelector currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle} styles={styles}/>
      <AddCart styles={styles} currentProductStyle={currentProductStyle}/>
      <Features features={features}/>
    </div>
  )
}

export default Overview