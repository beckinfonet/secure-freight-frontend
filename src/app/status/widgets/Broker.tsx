import React from "react";
import { Box, Typography } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
interface BrokerProps {
  name: string;
  reference: string;
}

export const Broker: React.FC<BrokerProps> = ({ name, reference }) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#666",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            opacity: 0.8,
          }}
        >
          BROKER
        </Typography>
        <OpenInFullIcon
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            fontSize: "25px",
            borderRadius: "15%",
            width: "25px",
            height: "20px",
          }}
        />
      </Box>
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
