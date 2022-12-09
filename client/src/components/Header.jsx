import React from 'react';
import styled from "styled-components";

const Nav = styled.nav`
background: #808080;
position: relative;
display: flex;
justify-content: space-between;
`;
const Search = styled.input`
height: 40px;
position: absolute;
bottom: 0px;
right: 0px;
`;
const Image = styled.img`

`;
const Header = () => {
return (
<Nav>
<Image src="https://i.ibb.co/mXDdZLc/SUPREME1.png" alt="SUPREME1" border="0"/>
<Search type="text"></Search>
</Nav>
)
}

export default Header