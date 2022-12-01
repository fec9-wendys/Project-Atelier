import React, { useEffect, useState, useMemo } from 'react';
import AddCart from './AddCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import Features from './Features.jsx'

const Overview = ({ currentProduct, request }) => {

  const [ratings, setRatings] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currThumbnails, setCurrThumbnails] = useState([]);
  const [currFeatures, setCurrFeatures] = useState(null)

  if (currentProduct !== null && ratings.length === 0) {
    request(`/reviews/?product_id=${currentProduct.id}`, 'GET', {}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        setRatings(response.results.map(result => {
          console.log('i am result.rating: ', result.rating);
          return result.rating;
        }));

        if (styles.length === 0) {
          request(`/products/${currentProduct.id}/styles`, 'GET', {}, (err, response) => {
            if (err) {
              console.log(err);
            } else {
              console.log('i am all styles: ;', response.results);
              setStyles(response.results);
              console.log('i am list of thumbnails: ', response.results[0].photos);
              setCurrThumbnails(response.results[0].photos);
            }
          })
        }
      }
    })
  }



  return (
    <div id="overview">
      {currentProduct !== null &&
        <div>
          {currentProduct.name} {currentProduct.default_price} {currentProduct.slogan}
        </div>
      }


      {ratings.map((rating, key) => {
        return (
          <div key={key}>
            {rating}
          </div>)
      })}


      {styles.length !== 0 &&
        styles.map((style, key) => {
          return (
            <div key={key}>
              {style.style_id}
            </div>
          )
        })}
        <StyleSelector/>
        <AddCart />
        <Features />
    </div>
  )
}

export default Overview