import React from 'react';
import { Box, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Hello, I’m Muhammad Muzaib
      </Typography>
      <Typography variant="body1" paragraph>
        I’m a Full Stack Java Software Developer with a strong background in React, Java,
        and agile development. I recently graduated from Brooklyn College with a focus on
        Operating Systems, Databases, Robotics, and more.
      </Typography>
      <Typography variant="body1" paragraph>
        My core skills include Java 21, Spring Boot, React, TypeScript, MySQL, Docker, and 
        various other technologies. I love building robust, user-focused applications and
        continuously improving my craft through collaboration and agile best practices.
      </Typography>
      <Typography variant="body1">
        Explore my projects or download my resume to learn more about my experience.
      </Typography>
    </Box>
  );
};

export default Home;
