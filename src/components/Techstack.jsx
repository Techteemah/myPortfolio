import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";

const TechStack = () => {
  return (
    <TechStackSection id="techstack">
      <Title>
        <h2>MY TECH STACK</h2>
      </Title>
      <IconContainer>
        <TechIcon>
          <FaHtml5 size="40" />
          <p>HTML5</p>
        </TechIcon>
        <TechIcon>
          <FaCss3Alt size="40" />
          <p>CSS3</p>
        </TechIcon>
        <TechIcon>
          <FaJs size="40" />
          <p>JavaScript</p>
        </TechIcon>
        <TechIcon>
          <SiTypescript size="40" />
          <p>TypeScript</p>
        </TechIcon>
        <TechIcon>
          <FaReact size="40" />
          <p>React</p>
        </TechIcon>
        <TechIcon>
          <SiTailwindcss size="40" />
          <p>Tailwind</p>
        </TechIcon>
        <TechIcon>
          <FaGitAlt size="40" />
          <p>Git</p>
        </TechIcon>
        <TechIcon>
          <VscVscode size="40" />
          <p>VS Code</p>
        </TechIcon>
        <TechIcon>
          <FaGithub size="40" />
          <p>GitHub</p>
        </TechIcon>
      </IconContainer>
    </TechStackSection>
  );
};

export default TechStack;

const TechStackSection = styled.section`
  text-align: center;
  padding: 40px 10px;
  color: #fff;
  background-color: #222;
  min-height: 40vh;
`;

const Title = styled.div`
  h2 {
    font-size: 30px;
    color: #FF5722;
    margin-bottom: 40px;
    letter-spacing: 2px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
  
`;

const TechIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FF5722;
  width: 150px; 
  
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #ccc;
    
  }

  &:hover {
    svg {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
`;
