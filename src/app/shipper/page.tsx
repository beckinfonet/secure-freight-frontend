"use client";
import { Container, Typography, Paper, Box } from "@mui/material";

export default function ShipperPage() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Shipper Dashboard
          </Typography>
          <Typography variant="h6">Welcome to the Shipper portal</Typography>
        </Paper>
      </Container>
    </Box>
  );
}
