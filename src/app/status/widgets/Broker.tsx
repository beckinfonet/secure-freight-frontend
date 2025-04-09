import React from "react";
import { Box, Typography } from "@mui/material";

interface BrokerProps {
  name: string;
  reference: string;
}

export const Broker: React.FC<BrokerProps> = ({ name, reference }) => {
  return (
    <Box
      sx={{
        // flex: "0 0 35%",
        // backgroundColor: "lightgray",
        borderRadius: "8px",
        // p: 2,
      }}
    >
      <Typography
        sx={{
          color: "#666",
          fontSize: "0.75rem",
          mb: 1.5,
          letterSpacing: "0.06em",
          opacity: 0.8,
        }}
      >
        BROKER
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
        Ref: {reference}
      </Typography>
    </Box>
  );
};
