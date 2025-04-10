"use client";

import { Container, Typography, Paper, Box } from "@mui/material";
import DeviceManagement from "../../fingerprints/components/DeviceManagement";

export default function DevicesPage() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Device Management
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Manage your registered devices for secure approvals
          </Typography>

          <DeviceManagement />
        </Paper>
      </Container>
    </Box>
  );
}
