import CustomButton from "@/components/Atoms/CustomButton";
import ErrorSvg from "@/components/Atoms/ErrorSvg";
import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        my: "90px",
        maxWidth: "670px",
        mx: "auto",
        px: "15px",
        textAlign: "center",
      }}
    >
      <ErrorSvg />
      <Typography
        sx={{ mt: "34px", fontSize: { xs: "30px", md: "40px" } }}
        fontWeight={800}
        variant="h2"
      >
        Oops, this page is not found
      </Typography>
      <Typography sx={{ mt: "28px", mb: "34px" }} variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus.
      </Typography>
      <CustomButton href="/" size="padding">
        Go To Homepage
      </CustomButton>
    </Box>
  );
};

export default NotFound;
