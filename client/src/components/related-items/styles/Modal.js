import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`;

const Content = styled.div`
  position: fixed;
  height: 450px;
  width: 820px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  z-index: 1000;
  border-radius: 3rem;
    padding: 50px;

`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export { Overlay, Content, Close };
