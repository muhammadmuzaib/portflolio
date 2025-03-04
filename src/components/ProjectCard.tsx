import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  projectLink,
  demoLink,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        padding: 1,
        background: "transparent",
      }}
    >
      <CardActionArea
        component="a"
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            backgroundColor: "primary.secondary",
            "&hover": {
              backgroundColor: "primary.secondary",
            },
          }}
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          size="small"
          color="primary"
          sx={{
            backgroundColor: "primary.secondary",
            "&hover": {
              backgroundColor: "primary.secondary",
            },
          }}
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
