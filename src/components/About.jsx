import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <IntroContainer>
      <IntroSection>
        <Greeting>
          <h2><strong>Hello!</strong> 👋</h2>
        </Greeting>
        <MyName>
          <h1>I am Techteemah</h1>
        </MyName>
        <Description>
          <p>
            <strong>I love to build cool stuff for the web!</strong>
          </p>
          <p>
            My name is Fatimah Adeniyi, and I'm a tech enthusiast from Nigeria. I believe that a strong sense of purpose keeps us inspired, making work feel effortless and fulfilling.  
          </p>
          <p>
            My passion for technology has grown day by day, fueled by curiosity and a desire to create solutions that make a difference. Coding started as a fun challenge and quickly became an empowering way to bring ideas to life and solve problems creatively.  
          </p>
          <p>
            Whether it's developing user-friendly websites or exploring innovations in tech, I find joy in building and improving. My journey into software development is one of continuous learning, and I am thrilled about the endless possibilities it holds.  
          </p>
        </Description>
      </IntroSection>
      <MyImage>
        <img src="/FatyB.png" alt="Image of Techteemah" />
      </MyImage>
    </IntroContainer>
  );
};

export default About;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 40px;
  margin: 0 50px 10px 10px;
  justify-content: space-between;
  gap: 50px;  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin: 0 20px; 
  }
`;

const IntroSection = styled.div`
  text-align: left;
  padding: 40px 20px;
  color: #0a0a0a;
  max-width: 800px;
  
  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`;

const Greeting = styled.div`
  h2 {
    font-size: 26px;
    color: #0a0a0a;
    margin-bottom: 15px;
  }
`;

const MyName = styled.div`
  h1 {
    font-size: 40px;
    color: #0a0a0a;
    margin: 10px 0 15px;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const Description = styled.div`
  p {
    font-size: 20px;
    color: #0a0a0a;
    line-height: 1.5;
    margin-bottom: 10px;
    font-weight: 500;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  strong {
    color: #0a0a0a;
    font-weight: bold;
  }
`;

const MyImage = styled.div`
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid #ff5722;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      margin-bottom: 20px;
    }
  }
`;
