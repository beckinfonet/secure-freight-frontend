"use client";
import { Card, Typography, Box, Avatar } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import CustomizedSteppers from "./Stepper";
import StatusHierarchy from "./StatusHierarchy";
import { Broker } from "./widgets/Broker";

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
        }}
      >
        Verified Ledger
      </Typography>

      {/* Status Hierarchy */}
      {price && (
        <Box>
          <StatusHierarchy price={price.amount} />
        </Box>
      )}

      <Box>
        <CustomizedSteppers />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "#000",
                letterSpacing: "-0.02em",
              }}
            >
              {pickupLocation}
            </Typography>
            <Typography sx={{ color: "#666", mt: 1, fontSize: "0.9rem" }}>
              {pickupTime}
            </Typography>
          </Box>
          <LocalShippingIcon
            sx={{
              color: "#2c62cf",
              fontSize: 20,
              mt: 2,
              opacity: 0.8,
            }}
          />
          <Box sx={{ textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "#000",
                letterSpacing: "-0.02em",
              }}
            >
              {dropoffLocation}
            </Typography>
            <Typography sx={{ color: "#666", mt: 1, fontSize: "0.9rem" }}>
              {dropoffTime}
            </Typography>
          </Box>
        </Box>

        {/* Combined Shipper & Broker Section */}
        <Box
          sx={{
            py: 1, // Adds 8px padding to top and bottom (1 * theme.spacing(1))
            borderRadius: "16px",
            background: "#f6f6f7",
            mb: 1,
            px: 1, // Adds 28px padding to left and right sides (3.5 * theme.spacing(1))
          }}
        >
          <Box sx={{ display: "flex" }}>
            {/* Shipper Section (65%) */}
            <Box sx={{ flex: "0 0 65%", pr: 1 }}>
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
                {shipperInfo.name}
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                {shipperInfo.contact}
              </Typography>
            </Box>

            {/* Broker Section */}
            <Broker name={brokerInfo.name} reference={brokerInfo.reference} />
          </Box>
        </Box>

        {/* Carrier Section */}
        <CarrierSection carrierInfo={carrierInfo} />
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
      </Box>
    </Card>
  );
}

const CarrierSection = ({
  carrierInfo,
}: {
  carrierInfo: { name: string; vehicleId: string };
}) => {
  return (
    <Box
      sx={{
        py: 2.5,
        borderRadius: "16px",
        background: "#f6f6f7",
        mb: 2,
        px: 3.5,
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
        CARRIER
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#000",
              fontWeight: 500,
              mb: 1,
            }}
          >
            {carrierInfo.name}
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
            {carrierInfo.vehicleId}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 64,
              height: 64,
              border: "2px solid #fff",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
              borderRadius: "50%",
            }}
            src="/shipper-avatar.jpg"
          />
          <VerifiedUserOutlinedIcon
            sx={{
              position: "absolute",
              right: -8,
              bottom: -4,
              color: "#50C878",
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "2px",
              fontSize: "22px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
