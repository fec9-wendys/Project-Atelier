import React from 'react';
import styled from "styled-components";
const Nav = styled.nav`

display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 10;
height: 127px;
`;


const Header = () => {

  return (
    <Nav>
      <img className="header-background" src="https://i.ibb.co/cCCzr08/supreme-background.png"/>
      <img className="supreme-logo" src="https://i.ibb.co/mXDdZLc/SUPREME1.png" />
      <div className="nav-total">
        <input className="search" id="nav-search" type="text" />
        <button id="nav-button">
          <img src="https://i.ibb.co/LrV1Xws/searchbar-icon.webp"></img>
        </button>
      </div>

    </Nav>
  )
}

export default Header