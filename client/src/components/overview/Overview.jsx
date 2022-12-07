import React, { useEffect, useState, useMemo } from 'react';

import AddCart from './AddCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import Features from './Features.jsx';
import Reviews from './Reviews.jsx';
import Description from './Description.jsx';
import Images from './Images.jsx';
import './styles.css';

const Overview = ({ currentProduct, request, currentProductStyle, setCurrentProductStyle, outfit, setOutfit }) => {

  const [ratings, setRatings] = useState([]);
  const [styles, setStyles] = useState([]);
  const [features, setFeatures] = useState(null);


  //This behemouth code is grabbing all needed data from API (requested styles, features, and ratings)
  useEffect(() => {

    if (features === null) {
      request(`/products/${currentProduct.id}/styles`, 'GET', {}, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          setStyles(response.results);
          setCurrentProductStyle(response.results[0]);

          if (styles.length === 0) {
            request(`/products/${currentProduct.id}`, 'GET', {}, (err, response) => {
              if (err) {
                console.log(err);
              } else {
                setFeatures(response);

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
  }, [currentProduct])



  return (
    <div id="overview">
      {currentProductStyle !== null &&
        <Images currentProductStyle={currentProductStyle} />
      }
      {ratings.length !== 0 &&
        <Reviews ratings={ratings} />
      }
      {features !== null &&
        <Description currentProduct={currentProduct} currentProductStyle={currentProductStyle} />
      }
      {currentProductStyle !== null && styles !== null &&
        <StyleSelector currentProductStyle={currentProductStyle} setCurrentProductStyle={setCurrentProductStyle} styles={styles} />
      }
      {currentProductStyle !== null &&
        <AddCart request={request} currentProductStyle={currentProductStyle} outfit={outfit} setOutfit={setOutfit} currentProduct={currentProduct}/>
      }
      {features !== null &&
        <Features features={features} />
      }
    </div>
  )
}

export default Overview