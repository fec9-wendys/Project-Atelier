import React from 'react';
const { useState, useEffect } = React;

import Card from './Card.jsx';

import { Container, Empty } from './styles/Outfit.js'
import Category from './styles/Category.js';
import { Carousel, List, Button1, Button2 } from './styles/Carousel.js';

const Outfit = ({ outfit, setOutfit, currentProduct, setCurrentProduct, request, isDarkMode }) => {
  const [renderRange, setRenderRange] = useState([0, 0]);

  useEffect(() => {
    setRenderRange([0, outfit.length < 4 ? outfit.length : 4]);
  }, [outfit]);

  const handleRenderRangeAdjustment = (magnitude = 0) => {
    if (magnitude < 0 && outfit[renderRange[0] + magnitude] !== undefined) {
      setRenderRange([renderRange[0] + magnitude, renderRange[1] + magnitude]);
    } else if (magnitude > 0 && outfit[renderRange[1]] !== undefined) {
      setRenderRange([renderRange[0] + magnitude, renderRange[1] + magnitude]);
    }
  }

  const renderCarousel = () => {
    return (
      <Carousel>
        {outfit.length === 0 ? <Empty>Your outfit is currently empty.</Empty> : (
          <>
            <Button1 onClick={() => handleRenderRangeAdjustment(-1)} style={{ visibility: renderRange[0] === 0 ? 'hidden' : 'visible' }}>&lt;</Button1>
            <List inOutfit={true}>
            {outfit.slice(renderRange[0], renderRange[1]).map((product, i) => <Card key={product.id} index={i} productId={product.id} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} inOutfit={true} outfit={outfit} setOutfit={setOutfit} request={request} />)}
            </List>
            <Button2 onClick={() => handleRenderRangeAdjustment(1)} style={{ visibility: renderRange[1] === outfit.length ? 'hidden' : 'visible' }}>&gt;</Button2>
          </>
        )}
      </Carousel>
    );
  };

  return (
    <Container isDarkMode={isDarkMode} data-testid="jest/outfit">
      <Category>Your Outfit</Category>
      {renderCarousel()}
    </Container>
  );
};

export default Outfit;