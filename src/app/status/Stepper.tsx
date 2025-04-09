import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import SwipeRightOutlinedIcon from "@mui/icons-material/SwipeRightOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg, #3DA164 0%, #50C878 50%, #3DA164 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg, #3DA164 0%, #50C878 50%, #3DA164 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, #3DA164 0%, #50C878 50%, #3DA164 100%)",
        boxShadow: "0 4px 10px 0 rgba(80, 200, 120, 0.25)",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, #3DA164 0%, #50C878 50%, #3DA164 100%)",
      },
    },
  ],
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <RequestQuoteOutlinedIcon />,
    3: <AddTaskOutlinedIcon />,
    2: <SwipeRightOutlinedIcon />,
    4: <WhereToVoteOutlinedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  { label: "Quote created by shipper", fontSize: "0.7rem" },
  { label: "Quote accepted by broker", fontSize: "0.7rem" },
  { label: "Quote accepted by carrier", fontSize: "0.7rem" },
  { label: "Load dropped", fontSize: "0.7rem" },
];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: "100%", mb: 3 }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={2}
        connector={<ColorlibConnector />}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel slots={{ stepIcon: ColorlibStepIcon }}>
              <Typography sx={{ fontSize: step.fontSize }}>
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
