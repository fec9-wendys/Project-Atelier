import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;
import { ReactSession } from 'react-client-session';

import Details from './Details.jsx';
import Modal from './Modal.jsx';

import Container from './styles/Card.js';

const Card = ({ index, productId, currentProduct, setCurrentProduct, inOutfit, outfit, setOutfit, request }) => {
  const [product, setProduct] = useState(ReactSession.get(productId));
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
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
    if (product) {
      ReactSession.set(productId, product);
      setReady(true);
    }
  }, [product]);

  return !ready || product.ratings === 0 ? null : (
    <>
      <Container>
        <img src={product.styles[0].photos[0].thumbnail_url} onClick={() => setIsOpen(true)}></img>
        <Details index={index} product={product} ratings={product.ratings} setCurrentProduct={setCurrentProduct} inOutfit={inOutfit} outfit={outfit} setOutfit={setOutfit} />
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} currentProduct={currentProduct} product={product}>Hello</Modal>
    </>
  );
};

export default Card;