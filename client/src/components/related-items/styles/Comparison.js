import styled from 'styled-components';

const Comparison = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Entry = styled.div`
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  padding-top: 10px;
`;

const Break = styled.div`
  height: 10px;
  width: 100%;
`;

export { Comparison, Column, Entry, Break };