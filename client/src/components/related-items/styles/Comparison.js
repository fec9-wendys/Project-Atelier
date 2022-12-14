import styled from 'styled-components';

const Comparison = styled.div`
  width: max-content;
  height: 90%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-center;
  margin-bottom: 20px;
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