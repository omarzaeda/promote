import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../Molecules/Header";
import Image from "next/image";
import CustomButton from "../Atoms/CustomButton";
const Services = () => {
  const data = [
    {
      id: 1,
      title: "Social Media Marketing",
      description:
        "We let you to be always connect with anyone through a social media network.",
      iconSrc: "/icons/social-media-icon.png",
    },
    {
      id: 2,
      title: "Paid Advertising",
      description:
        "Advertise your organization with one of the updated search engine algorithm.",
      iconSrc: "/icons/advertising-icon.png",
    },
    {
      id: 3,
      title: "Advanced Analytics",
      description:
        "Our firm travels with an effective working strategy for all type of tasks.",
      iconSrc: "/icons/advanced-analytics-icon.png",
    },
    {
      id: 4,
      title: "SEO Optimization",
      description:
        "Be at the top of google search by our incredible and organic SEO technique.",
      iconSrc: "/icons/seo-rocket-icon.png",
    },
    {
      id: 5,
      title: "Funnel Optimization",
      description:
        "You would see the biggest gift would be from me and to make the others comfortable.",
      iconSrc: "/icons/funnel-optimization-icon.png",
    },
    {
      id: 6,
      title: "Content Marketing",
      description:
        "Brand your firm with an intelligent team which is deal with social media strategy.",
      iconSrc: "/icons/marketing-plan-icon.png",
    },
  ];
  return (
    <Box
      sx={{
        py: { xs: "80px", md: "173px" },
        bgcolor: "secondary.main",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Header badge="01 . Services" textColor="white" badgeColor="grey.1">
          High-impact services to take your business to the next level
        </Header>
        <Grid
          container
          spacing={3}
          sx={{
            mt: { xs: "50px", md: "90px" },
          }}
        >
          {data.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: { xs: "20px", sm: "40px" },
                  bgcolor: "secondary.main2",
                  borderRadius: "30px",
                  maxWidth: { xs: "100%", md: "352px" },
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    p: "35px",
                    width: 153,
                    height: 153,
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={card.iconSrc} alt="" width={75} height={85} />
                </Box>
                <Typography
                  sx={{ color: "white", mt: "26px", mb: "14px", height: 66.69 }}
                  variant="h5"
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.1",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                  variant="p"
                >
                  {card.description}
                </Typography>
                <Box sx={{ mt: "26px" }}>
                  <CustomButton
                    href={`/services/${card.id}`}
                    variant="grayscale"
                    icon
                    iconGreyScale
                    size="full"
                  >
                    View Service
                  </CustomButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
