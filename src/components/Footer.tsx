import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 3, textAlign: "center", backgroundColor: "footer.main" }}
    >
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          FIND ME ON
        </Typography>
        <IconButton
          color="inherit"
          aria-label="GitHub"
          href="https://github.com/muhammadmuzaib"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/muhammad-muzaib/"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.primary">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
