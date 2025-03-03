import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  projectLink,
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
    </Card>
  );
};

export default ProjectCard;
