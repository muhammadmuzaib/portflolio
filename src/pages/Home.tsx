import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

import avatar from "../assets/avatar.svg";
import illustration from "../assets/home-main.svg";

import Header from "../components/Header";

const ILLUSTRATION_URL = illustration;
const AVATAR_URL = avatar;

const Home: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#090A0F",
          color: "#fff",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Hi There!{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: "#EC407A",
              }}
            >
              I’M MUHAMMAD MUZAIB
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              I’m a Full Stack Java Software Developer with a strong background
              in React, Java, and agile development. I love building
              user-focused applications and continuously improving my craft
              through collaboration and agile best practices.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={ILLUSTRATION_URL}
              alt="Coding illustration"
              sx={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#111",
          color: "#fff",
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          LET ME <span style={{ color: "#EC407A" }}>INTRODUCE</span> MYSELF
        </Typography>

        <Grid2
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Avatar
              alt="Profile"
              src={AVATAR_URL}
              sx={{ width: 200, height: 200, margin: "0 auto" }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }} mt={6}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              I fell in love with programming and I have at least learned
              something, I think. I am fluent in Java, TypeScript, React. My
              field of interests are building new{" "}
              <strong>Web Technologies and Products</strong>.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              Whenever possible, I also apply my passion for developing products
              with Java and modern Spring libraries and frameworks like{" "}
              <strong>Spring Boot, Spring Cloud </strong>
              and <strong>Docker</strong>.
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Home;
