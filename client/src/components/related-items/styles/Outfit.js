import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  background-color: ${({ isDarkMode }) => isDarkMode ? 'black' : 'white'};
  border-top: 1px solid ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};
  border-bottom: 1px solid ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};
  color: ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};

  button {
    color: ${({ isDarkMode }) => isDarkMode ? 'white' : 'black'};
  }
`;

const Empty = styled.div`
`;

export { Container, Empty };