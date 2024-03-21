import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Badge from "../Atoms/Badge";
import CustomButton from "../Atoms/CustomButton";

const Header = ({
  children,
  badge,
  badgeColor,
  textColor = "secondary-main",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        flexWrap: "wrap",
        gap: { xs: "40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <Image src="/icons/setting-icon.svg" alt="" width={88} height={88} />
        <Box sx={{ maxWidth: "620px" }}>
          <Badge color={badgeColor}>{badge}</Badge>
          <Typography variant="h2" sx={{ color: textColor, mt: "15px" }}>
            {children}
          </Typography>
        </Box>
      </Box>
      <CustomButton variant="white" icon>
        Our Services
      </CustomButton>
    </Box>
  );
};

export default Header;
