import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  border-top: 1px solid ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};

  button {
    color: ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};
  }
`;

export default Container;