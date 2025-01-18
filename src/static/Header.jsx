import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container className="header-container">
      <Logo>👨‍💻 TECHTEEMAH</Logo>
      <Nav>
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
    flex-direction: column; 
    height: auto; 
    padding: 20px 20px;
    align-items: center;
  }
`;

const Logo = styled.div`
  color: #ffffff;
  font-size: 35px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 15px;
    align-items: center; 
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
