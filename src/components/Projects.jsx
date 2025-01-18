import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';
import project1 from '../assets/proj1.png';
import project2 from '../assets/proj2.png';
import project3 from '../assets/proj3.png';
import project4 from '../assets/proj4.png';
import project5 from '../assets/proj5.png';

const Projects = () => {
  return (
    <Section id='projects'>
      <Heading>PROJECTS</Heading>
      <ProjectList>
        <Card>
          <CardImage src={project1} alt="Make Remote App" />
          <CardContent>
            <CardTitle>Recreating the Make Remote App Landing Page</CardTitle>
            <CardDescription>
              This project involves recreating a remote app landing page using HTML and CSS for practice and design exploration.
            </CardDescription>
            <ExpandedText>
              Reproduced the landing page of the Make Remote App as part of a Frontend Mentor challenge. This helped test and strengthen my HTML and CSS skills by focusing on layout and design replication. The task emphasized creating a responsive page using best practices.
            </ExpandedText>
            <CardActions>
              <ActionLink href="https://github.com/Techteemah/fatbell" target="_blank">
                <FaGithub /> GitHub
              </ActionLink>
              <ActionLink href="https://techteemah.github.io/fatbell/" target="_blank">
                Live Demo
              </ActionLink>
            </CardActions>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={project2} alt="Nextcent Photography" />
          <CardContent>
            <CardTitle>Recreating the Nextcent Photography Landing Page</CardTitle>
            <CardDescription>
              Recreated the Nextcent Photography landing page, focusing on Flexbox and CSS Grid for layout responsiveness.
            </CardDescription>
            <ExpandedText>
              The project focused on using Flexbox and CSS Grid for layout while replicating the Nextcent Photography landing page. I worked on mastering alignment and responsive design to ensure the page adjusts well to different screen sizes.
            </ExpandedText>
            <CardActions>
              <ActionLink href="https://github.com/Techteemah/Milestoneproject2" target="_blank">
                <FaGithub /> GitHub
              </ActionLink>
              <ActionLink href="https://techteemah.github.io/Milestoneproject2/" target="_blank">
                Live Demo
              </ActionLink>
            </CardActions>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={project3} alt="Furniture Company Landing Page" />
          <CardContent>
            <CardTitle>Furniture Company Landing Page</CardTitle>
            <CardDescription>
              Built a furniture brand’s landing page, tackling CSS positioning challenges with relative, absolute, and static elements.
            </CardDescription>
            <ExpandedText>
              The project involved recreating the landing page of a furniture company, focusing on advanced CSS techniques like positioning and layout. I practiced relative, absolute, and static positioning to structure the page, enhancing my understanding of CSS positioning.
            </ExpandedText>
            <CardActions>
              <ActionLink href="https://github.com/Techteemah/MilestoneProjectFurniture" target="_blank">
                <FaGithub /> GitHub
              </ActionLink>
              <ActionLink href="https://techteemah.github.io/MilestoneProjectFurniture/" target="_blank">
                Live Demo
              </ActionLink>
            </CardActions>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={project4} alt="Advanced Country Explorer Page" />
          <CardContent>
            <CardTitle>Advanced Country Explorer Page</CardTitle>
            <CardDescription>
              Built a dynamic page displaying country information with filters, using HTML, CSS, and JavaScript.
            </CardDescription>
            <ExpandedText>
              This project involved displaying country data dynamically from an API. I integrated features like a dark/light mode toggle, dropdowns, and filters to enhance the user experience and improve page interactivity.
            </ExpandedText>
            <CardActions>
              <ActionLink href="https://github.com/Techteemah/countriesPro" target="_blank">
                <FaGithub /> GitHub
              </ActionLink>
              <ActionLink href="https://techteemah.github.io/countriesPro/" target="_blank">
                Live Demo
              </ActionLink>
            </CardActions>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={project5} alt="Kuda-clone App" />
          <CardContent>
            <CardTitle>Kuda-clone App</CardTitle>
            <CardDescription>
              Created a replica of the Kuda app, focusing on user interface features and core banking functionalities.
            </CardDescription>
            <ExpandedText>
              This project involved recreating Kuda’s user interface and functionalities. I used React.js to manage components and state, and integrated routing and Styled-Components for styling, enhancing my knowledge of React’s ecosystem.
            </ExpandedText>
            <CardActions>
              <ActionLink href="https://github.com/Techteemah/Kuda_clone" target="_blank">
                <FaGithub /> GitHub
              </ActionLink>
              <ActionLink href="https://kuda-clone-swart.vercel.app/" target="_blank">
                Live Demo
              </ActionLink>
            </CardActions>
          </CardContent>
        </Card>
      </ProjectList>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  padding: 20px;
  background-color:#FFFFFF; 
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 32px;
  color: #ff5722;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 650px;
  font-family: 'Arial', sans-serif;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 24px; 
  margin-bottom: 10px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 16px; 
  margin-bottom: 15px;
  color: #555;
`;

const ExpandedText = styled.div`
  font-size: 14px; 
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
`;

const ActionLink = styled.a`
  color: #333;
  font-size: 18px; 
  text-decoration: none;
`;
