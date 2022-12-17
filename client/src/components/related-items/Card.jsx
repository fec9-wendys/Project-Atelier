import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;
import { ReactSession } from 'react-client-session';

import Details from './Details.jsx';
import Modal from './Modal.jsx';

import Container from './styles/Card.js';

const Card = ({ index, productId, currentProduct, setCurrentProduct, inOutfit, outfit, setOutfit, request }) => {
  const [product, setProduct] = useState(ReactSession.get(productId));
  const [currentProductFeatures, setCurrentProductFeatures] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    request(`/products/${currentProduct.id}`, 'GET', {}, (error, features) => {
      if (error) {
        console.error(error);
      } else {
        setCurrentProductFeatures(features);
      }
    });

    if (!product) {
      request(`/products/${productId}`, 'GET', {}, (error, product) => {
        if (error) {
          console.error(error);
        } else {
          request(`/products/${productId}/styles`, 'GET', {}, async (error, styles) => {
            if (error) {
              console.error(error);
            } else {
              await request(`/reviews/meta?product_id=${productId}`, 'GET', {}, (error, metadata) => {
                if (error) {
                  console.error(error);
                } else {
                  product.styles = styles.results;
                  product.ratings = metadata.ratings ?? 0;
                  setProduct(product);
                }
              });
            }
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (currentProductFeatures && product) {
      ReactSession.set(productId, product);
      setReady(true);
    }
  }, [currentProductFeatures, product]);

  return !ready || product.ratings === 0 ? null : (
    <>
      <Container>
        <img src={product.styles[0].photos[0].thumbnail_url} alt = 'related-items' onClick={() => setIsOpen(true)}></img>
        <Details index={index} product={product} ratings={product.ratings} setCurrentProduct={setCurrentProduct} inOutfit={inOutfit} outfit={outfit} setOutfit={setOutfit} />
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} currentProductFeatures={currentProductFeatures} product={product} request={request}>Hello</Modal>
    </>
  );
};

export default Card;