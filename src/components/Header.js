import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: white;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
  color: #333;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #0073e6;
  }
`;

function Header() {
  return (
    <NavBar>
      <NavLinks>
        <NavLogo to="/">My Dev Blog</NavLogo>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </NavLinks>
    </NavBar>
  );
}

export default Header;
