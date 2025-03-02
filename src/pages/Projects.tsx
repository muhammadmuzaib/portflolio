import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    image: "/path/to/image1.jpg",
    projectLink: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    image: "/path/to/image2.jpg",
    projectLink: "https://github.com/yourusername/project-two"
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {projects.map((project, index) => (
        <Grid key={index} xs={12} sm={6} md={4}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            projectLink={project.projectLink}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
