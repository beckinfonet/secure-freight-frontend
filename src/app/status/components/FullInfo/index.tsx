import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FullInfo = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "16px",
        alignItems: "flex-start",
        justifyContent: "space-between",
        p: 2,
        mb: 2,
        width: "100%",
        minHeight: "300px",
        backgroundColor: "#aeaebc",
        animation: `${fadeIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Typography variant="h6">Full Info</Typography>
      <Button
        onClick={onClick}
        sx={{
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Close
      </Button>
    </Box>
  );
};
