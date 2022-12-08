import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 10px;
`;

const Category = styled.div`
  text-transform: uppercase;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 400;
  font-size: .9rem;
`;

const Name = styled.div`
  width: max-content;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;

  :hover {
    cursor: pointer;
  }
`;

const Price = styled.div``;

const DefaultPrice = styled.span`
  text-transform: uppercase;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 400;
  font-size: .9rem;
`;

const DiscountPrice = styled.span`
  padding-left: 4px;
  color: red;
  text-transform: uppercase;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 400;
  font-size: .9rem;
`;

const Rating = styled.div``;

const Icon = styled.div`
  width: min-content;
  height: min-content;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 10px;
  padding-right: 10px;
`;

export {
  Container,
  Category,
  Name,
  Price,
  DefaultPrice,
  DiscountPrice,
  Rating,
  Icon
};
