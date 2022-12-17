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


const Header = ({ isDarkMode, setIsDarkMode }) => {

  const handleClick = (e) => {
    setIsDarkMode(!isDarkMode);
  }

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

      <button className="gooey-button">
        <img className="christmaslights" src="https://i.ibb.co/k38nH82/christmas-lights.png" alt="christmas-lights" border="0" />
        <img className="supreme-logo" src="https://i.ibb.co/mXDdZLc/SUPREME1.png" alt='Supreme Logo Design' />
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


      <div>
        <img className="batlogo" src="https://i.ibb.co/1mwFTst/bat.png" alt="bat" border="0" />
        <label className="switch">

          <input type="checkbox" onClick={e => handleClick(e)} />
          <span className="slider round"></span>
        </label>
      </div>





      <div className="nav-total">
        <label htmlFor='nav-search' id='nav-search-bar' name='search-bar' value='NAV-SEARCH-BAR'></label>
        <input className="search" id="nav-search" type="text" name = 'nav-search'/>
        <button id="nav-button" name='nav-button'>
          <img src="https://i.ibb.co/LrV1Xws/searchbar-icon.webp" alt='magnifiying glass icon'></img>
        </button>
      </div>

    </Nav>
  )
}

export default Header