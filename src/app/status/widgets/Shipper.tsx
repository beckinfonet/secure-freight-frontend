import React from "react";
import { Box, Typography } from "@mui/material";

interface ShipperProps {
  name: string;
  contact: string;
  isVisible?: boolean;
}

export const Shipper: React.FC<ShipperProps> = ({
  name,
  contact,
  isVisible = true,
}) => {
  if (!isVisible) return null;

  return (
    <Box sx={{ flex: "0 0 65%", pr: 3 }}>
      <Typography
        sx={{
          color: "#666",
          fontSize: "0.75rem",
          mb: 1.5,
          letterSpacing: "0.06em",
          opacity: 0.8,
        }}
      >
        SHIPPER
      </Typography>
      <Typography
        sx={{
          fontSize: "1.1rem",
          color: "#000",
          fontWeight: 500,
          mb: 1,
        }}
      >
        {name}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
        {contact}
      </Typography>
    </Box>
  );
};
