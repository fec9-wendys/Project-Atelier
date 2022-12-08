import styled from 'styled-components';

const Container = styled.div`
  width: 255px;
  height: 380px;
  box-shadow: 3px 3px 3px 3px #F5F5F5;
  overflow-wrap: break-word;
  animation: fade-in 1s;

  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  img {
    position: relative;
    min-width: 100%;
    max-width: 100%;
    min-height: 70%;
    max-height: 70%;
  }
`;

export default Container;