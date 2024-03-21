import { Box, Typography } from "@mui/material";
import React from "react";

const Badge = ({ children, color }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography
          component="span"
          sx={{
            fontSize: "15px",
            color: "primary.main",
            fontWeight: 700,
            fontFamily: "Noto Space",
          }}
        >
          /
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: "15px",
            color: "primary.main",
            fontWeight: 700,
            fontFamily: "Noto Space",
          }}
        >
          /
        </Typography>
      </Box>
      <Typography
        component="p"
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          fontSize: "15px",
          color: color,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Badge;
