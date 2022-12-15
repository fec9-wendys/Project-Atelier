import React from 'react';
import { ReactSession } from 'react-client-session';

import { Container, Category, Name, Price, DefaultPrice, DiscountPrice, Rating, Icon } from './styles/Details.js';

const Details = ({ index, product, ratings, setCurrentProduct, inOutfit, outfit, setOutfit }) => {
  const renderPrice = () => {
    if (product.discount_price !== undefined) {
      return (
        <>
          <DefaultPrice><strike>{product.default_price}</strike></DefaultPrice>
          <DiscountPrice>{product.discount_price}</DiscountPrice>
        </>
      );
    }
    return <DefaultPrice>{product.default_price}</DefaultPrice>;
  };

  const renderAverageRating = () => {
    let total = 0;
    const compliments = [];
    Object.keys(ratings).forEach(rating => {
      total += +ratings[rating];
      compliments.push(+rating * +ratings[rating]);
    });
    const averageRating = compliments.reduce((accumulator, current) => accumulator + current) / total;

    const stars = [];
    let key = 0;
    for (let i = 1; i < averageRating + 1; i++) {
      if (i > averageRating) {
        stars.push(i - averageRating <= 0.5 ? <i key={key} className="fa-solid fa-star"></i> : <i key={key} className="fa-solid fa-star-half-stroke"></i>);
      } else {
        stars.push(<i key={key} className="fa-solid fa-star"></i>);
      }
      key++;
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<i key={key} className="fa-regular fa-star"></i>);
      key++;
    }

    return stars;
  };

  const handleClick = () => {
    if (!inOutfit) {
      if (!outfit.reduce((accumulator, current) => current.id === product.id, false)) {
        setOutfit([...outfit, product]);
        ReactSession.set('outfit', [...outfit, product]);
      }
    } else {
      const newOutfit = [...outfit];
      newOutfit.splice(index, 1);
      setOutfit(newOutfit);
      ReactSession.set('outfit', newOutfit);
    }
  };
  const handleNameClick = () => {
    document.getElementById('size-dropdown').value = 'select-size'
    setCurrentProduct(product)
  }
  return (
    <Container>
      <Category>{product?.category}</Category>
      <Name onClick={handleNameClick}>{product?.name}</Name>
      <Price>{renderPrice()}</Price>
      <Rating>{renderAverageRating()}</Rating>
      <Icon isCrown={!inOutfit}><i className={!inOutfit ? "fa-solid fa-crown" : "fa-solid fa-x"} onClick={handleClick}></i></Icon>
    </Container>
  );
};

export default Details;