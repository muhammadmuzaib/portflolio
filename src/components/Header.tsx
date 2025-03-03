import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";

const Header: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "secondary.main" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton
            color="inherit"
            onClick={() => navigate(-1)}
            aria-label="go back"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
              ml: 3,
            }}
          >
            MM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            startIcon={<WorkIcon />}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/resume"
            startIcon={<ArticleIcon />}
          >
            Resume
          </Button>
        </Box>

        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
