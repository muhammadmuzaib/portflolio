import React from "react";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";

import collegeInvaders from "../assets/collegeInvaders.png";

const projects = [
  {
    title: "College Invaders",
    description:
      "College Invaders is a Space-Invaders-style arcade game with a Brooklyn College theme, developed using HTML, CSS, and JavaScript with the Phaser 3 framework. The game features engaging 2D graphics, animations, and collision detection, providing an exciting gameplay experience.",
    image: collegeInvaders,
    projectLink: "https://github.com/muhammadmuzaib/CollegeInvaders",
    demoLink: "https://muhammadmuzaib.github.io/CollegeInvaders/",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    image: "/path/to/image2.jpg",
    projectLink: "https://github.com/yourusername/project-two",
    demoLink: "https://yourusername.github.io/project-two/",
  },
];

const Projects: React.FC = () => {
  return (
    <Box>
      <Header />
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              projectLink={project.projectLink}
              demoLink={project.demoLink}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
