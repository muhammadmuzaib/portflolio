import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, projectLink }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={projectLink} target="_blank" rel="noopener noreferrer">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
