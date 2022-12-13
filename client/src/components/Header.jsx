import React from 'react';
import styled from "styled-components";
const Nav = styled.nav`

display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 10;
height: 180px;

`;


const Header = () => {

  return (
    <Nav>
      {/* <img className="header-background" src="https://i.ibb.co/cCCzr08/supreme-background.png"/> */}



      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">

                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>

    <button id="gooey-button">
    <img className="supreme-logo" src="https://i.ibb.co/mXDdZLc/SUPREME1.png" />
        <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
    </button>








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