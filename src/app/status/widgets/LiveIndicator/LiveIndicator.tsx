import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.6;
  }
`;

export const LiveIndicatorBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "4px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: "#0f9117",
        mx: "auto",
        mb: 2,
        animation: `${pulse} 2s ease-in-out infinite`,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "0.9rem",
          fontWeight: 600,
          letterSpacing: "0.02em",
          fontStyle: "italic",
        }}
      >
        Valid Until 4/10/25, 4:25 PM
      </Typography>
    </Box>
  );
};
