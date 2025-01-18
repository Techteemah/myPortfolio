import React from 'react';
import styled from 'styled-components';
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaSlack } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id='contact'>
      <HeadingWrapper>
        <h2>CONTACT</h2>
      </HeadingWrapper>
      <Headingtext>
        <h3>Let's connect together</h3>
      <h4>I'm always open to talk!</h4>
      </Headingtext>
      <IconContainer>
        <LinkWrapper>
          <a href="mailto:Fatee1bello@gmail.com" target="_blank">
            <SiGmail size={40} />
            <p>Gmail</p>
          </a>
        </LinkWrapper>

        <LinkWrapper>
          <a href="https://github.com/Techteemah" target="_blank">
            <FaGithub size={40} />
            <p>Github</p>
          </a>
        </LinkWrapper>

        <LinkWrapper>
          <a href="https://www.linkedin.com/in/fatimahadeniyi" target="_blank">
            <FaLinkedin size={40} />
            <p>LinkedIn</p>
          </a>
        </LinkWrapper>

        <LinkWrapper>
          <a
            href="https://www.instagram.com/techsupportwithteemah/profilecard/?igsh=MWd6Znhtam00bnc1Zg"
            target="_blank"
          >
            <FaInstagram size={40} />
            <p>Instagram</p>
          </a>
        </LinkWrapper>

        <LinkWrapper>
          <a href="https://www.slack.com/" target="_blank">
            <FaSlack size={40} />
            <p>Slack</p>
          </a>
        </LinkWrapper>

        <LinkWrapper>
          <a href="https://wa.me/2347061072822" target="_blank">
            <FaWhatsapp size={40} />
            <p>WhatsApp</p>
          </a>
        </LinkWrapper>
      </IconContainer>

      <ResumeWrapper>
        <a href="https://drive.google.com/file/d/177fF75P7-4fjthcnNBMCaQcJ0tndHhZD/view?usp=drive_link" target="_blank"
          rel="noopener noreferrer"
        >
    Resume
  </a>
</ResumeWrapper>

    </Section>
  );
};

export default Contact;

const Section = styled.div`
  text-align: center;
  padding: 40px 40px;
  color: #fff;
  background-color: #222;
  min-height: 40vh;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 30px;
    color: #ff5722;
    letter-spacing: 2px;
  }
`;

const Headingtext = styled.div`
  margin-bottom: 40px;

  h3 {
    text-align: center;
  }

  h4 {
    font-size: 20px;
    color: #ff5722;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 50px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LinkWrapper = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #ff5722;
    font-size: 24px;
    text-align: center;

    &:hover {
      color: #ccc;
    }

    p {
      margin: 8px 0 0;
      font-size: 18px;
      font-weight: 500;
      color: #ccc;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 20px;

      p {
        font-size: 16px;
      }
    }
  }
`;

const ResumeWrapper = styled.div`
  margin-top: 70px;

  a {
    display: inline-block;
    padding: 12px 20px;
    background-color: #ff5722;
    color: #ccc;
    text-decoration: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: bold;

    &:hover {
      background-color: #fff;
      color: #ff5722;
    }

    &:active {
      background-color: #ff5722;
      color: #0a0a0a;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 18px;
      padding: 10px 16px;
    }
  }
`;
