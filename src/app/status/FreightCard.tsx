"use client";
import { Card, Typography, Box } from "@mui/material";
import { Shipper } from "./widgets/Shipper";
import { BarcodeOnTimer } from "./widgets/BarcodeOnTimer";
import { CarrierSection } from "./widgets/Carrier";
import { StatusHierarchy } from "./StatusHierarchy";
import { Broker } from "./widgets/Broker";
import { StepProgress } from "./widgets/StepProgress";
import { LiveIndicatorBar } from "./widgets/LiveIndicator/LiveIndicator";

import CustomizedSteppers from "./Stepper";

interface FreightCardProps {
  pickupLocation: string;
  pickupTime: string;
  dropoffLocation: string;
  dropoffTime: string;
  shipperInfo: {
    name: string;
    contact: string;
  };
  carrierInfo: {
    name: string;
    vehicleId: string;
  };
  brokerInfo: {
    name: string;
    reference: string;
  };
  trackingId: string;
  price?: {
    amount: number;
    currency: string;
  };
  shipper: {
    id: string;
    name: string;
    avatar: string;
  };
  carrier: {
    id: string;
    name: string;
    avatar: string;
  };
}

export default function FreightCard({
  pickupLocation,
  pickupTime,
  dropoffLocation,
  dropoffTime,
  shipperInfo,
  carrierInfo,
  brokerInfo,
  trackingId,
  price,
  shipper,
}: FreightCardProps) {
  return (
    <Card
      sx={{
        background: "#fff",
        borderRadius: "24px",
        width: "100%",
        maxWidth: "420px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.06)",
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#2c62cf",
          fontSize: "1.5rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          opacity: 0.9,
          mb: 2,
        }}
      >
        Verified Ledger
      </Typography>
      <LiveIndicatorBar />

      {/* Status Hierarchy */}
      {price && (
        <Box>
          <StatusHierarchy
            price={price.amount}
            userId={shipper.id}
            userType="shipper"
          />
        </Box>
      )}

      <Box>
        <CustomizedSteppers />
      </Box>

      <Box sx={{ mb: 3 }}>
        <StepProgress
          pickupLocation={pickupLocation}
          pickupTime={pickupTime}
          dropoffLocation={dropoffLocation}
          dropoffTime={dropoffTime}
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <WidgetBox>
            <Shipper name={shipperInfo.name} contact={shipperInfo.contact} />
          </WidgetBox>
          <WidgetBox>
            <Broker name={brokerInfo.name} reference={brokerInfo.reference} />
          </WidgetBox>
        </Box>

        <CarrierSection carrierInfo={carrierInfo} />
        <BarcodeOnTimer trackingId={trackingId} />
      </Box>
    </Card>
  );
}

const WidgetBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        py: 1,
        borderRadius: "16px",
        background: "#f6f6f7",
        mb: 1,
        px: 1,
      }}
    >
      {children}
    </Box>
  );
};
