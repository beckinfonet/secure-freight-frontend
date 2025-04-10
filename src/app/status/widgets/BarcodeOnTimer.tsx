import React from "react";
import { Box, Typography } from "@mui/material";

interface BarcodeOnTimerProps {
  trackingId: string;
}

export const BarcodeOnTimer: React.FC<BarcodeOnTimerProps> = ({
  trackingId,
}) => {
  return (
    <Box
      sx={{
        mt: 3,
        py: 3,
        px: 3,
        background: "#f6f6f7",
        borderRadius: "16px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "2px",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          mb: 1.5,
        }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              height: "100%",
              width: "1.5px",
              bgcolor: "#000",
              opacity: 0.7,
            }}
          />
        ))}
      </Box>
      <Typography
        sx={{
          fontFamily: "SF Mono, monospace",
          fontSize: "0.95rem",
          color: "#000",
          opacity: 0.8,
          letterSpacing: "0.05em",
        }}
      >
        {trackingId}
      </Typography>
    </Box>
  );
};
