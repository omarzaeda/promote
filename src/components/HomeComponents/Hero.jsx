import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Badge from "../Atoms/Badge";
import CustomButton from "../Atoms/CustomButton";

const Hero = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: { xs: "flex", md: "block" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          paddingY: { xs: "50px", md: "100px", lg: "200px" },
          gap: 3,
        }}
      >
        <Box
          maxWidth={740}
          sx={{
            textAlign: { xs: "center", md: "left" },
            display: { xs: "flex", md: "block" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: { xs: "500px", lg: "600px" },
            position: "relative",
            zIndex: 1000,
          }}
        >
          <Badge>MARKETING AGENCY</Badge>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "30px", md: "50px", lg: "70px" },
              my: "28px",
              position: "relative",
              zIndex: 1000,
            }}
          >
            A fully integrated digital{" "}
            <Typography
              component="span"
              sx={{
                color: "primary.blue",
                fontWeight: 800,
                fontSize: { xs: "30px", md: "50px", lg: "70px" },
              }}
            >
              marketing
            </Typography>{" "}
            agency
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt ius ex. Ut vis mazim erroribus forensibus.
          </Typography>
          <Box
            sx={{
              mt: "34px",
              display: "flex",
              justifyContent: { xs: "center", md: "normal" },
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <CustomButton>Our Services</CustomButton>
            <CustomButton variant="outlined">Get Started</CustomButton>
          </Box>
        </Box>
        <Box
          sx={{
            position: { xs: "static", md: "absolute" },
            right: 0,
            top: "10%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 250, md: 500, lg: 700 },
              height: { xs: 250, md: 500, lg: 700 },
            }}
          >
            <Image src="/images/hero-image.png" alt="" fill />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
