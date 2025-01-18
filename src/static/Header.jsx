import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="header-container">
      <Logo>👨‍💻 TECHTEEMAH</Logo>
      <Nav>
        {/* Use anchor tags for scrolling to sections */}
        <NavItem>
          <a href="#about">About</a>
        </NavItem>
        <NavItem>
          <a href="#techstack">Tech Stack</a>
        </NavItem>
        <NavItem>
          <a href="#projects">Projects</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Contact</a>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  height: 120px;
  background-color: #222;
  width: 100%; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 240px;
    padding: 20px 20px;
    align-items: center;
    width: 100%;  
  }
`;

const Logo = styled.div`
  color: #ffffff;
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 10px;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const NavItem = styled.div`
  color: #ff6f61;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;

  a {
    color: #ff6f61;
    text-decoration: none;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;

    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }
`;
