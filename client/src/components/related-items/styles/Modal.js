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
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  z-index: 1000;
`;

const Close = styled.button`
  width: 90%;
  position: absolute;
  top: 10px;
  left: 20px;
`;

export { Overlay, Content, Close };
