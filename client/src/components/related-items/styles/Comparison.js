import styled from 'styled-components';

const Comparison = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
`;

const Category = styled.div`
  font-family: 'Yantramanav', sans-serif;
  font-weight: 700;
  text-decoration: underline
`;

const Entry = styled.div`
  font-family: 'Yantramanav', sans-serif;
`;

const Break = styled.div`
  height: 10px;
  width: 100%;
`;

export { Comparison, Category, Entry, Break };