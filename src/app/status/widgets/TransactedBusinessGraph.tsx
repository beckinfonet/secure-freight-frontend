import React from "react";
import { Box, Typography } from "@mui/material";

interface TransactedBusinessGraphProps {
  data: {
    date: string;
    transactedBusiness: number;
  }[];
}

export const TransactedBusinessGraph: React.FC<
  TransactedBusinessGraphProps
> = ({ data }) => {
  return <Box sx={{ width: "100%", height: 300 }}></Box>;
};
