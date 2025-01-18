import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

const Footer = () => {
  return (
    <FooterContainer>
      <FaCode size={30} style={{ marginRight: 10 }} />
      <FcLike size={30} color='#FF5722' style={{ marginRight: 10 }} />
      <span> by TechTeemah</span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
  justify-content: center;
  height: 100px;

  span{
    font-weight:600;
  }
  @media (max-width: 768px) {
    height: 60px;
  }
`;
  

