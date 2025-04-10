import { FC } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface StatusItemProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  isApproved: boolean;
  isExpanded: boolean;
  isApproving: boolean;
  showApproveButton: boolean;
  onExpand: () => void;
  onApprove: () => void;
}

export const StatusItem: FC<StatusItemProps> = ({
  title,
  description,
  timestamp,
  isApproved,
  isExpanded,
  isApproving,
  showApproveButton,
  onExpand,
  onApprove,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 1,
        p: 2,
        mb: 2,
        "&:last-child": { mb: 0 },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {timestamp}
          </Typography>
        </Box>
        <Box display="flex" gap={1}>
          {showApproveButton && (
            <Button
              variant="contained"
              color="primary"
              onClick={onApprove}
              disabled={isApproving}
              startIcon={isApproving ? <CircularProgress size={20} /> : null}
            >
              {isApproving ? "Approving..." : "Approve"}
            </Button>
          )}
          <Button
            variant="outlined"
            onClick={onExpand}
            endIcon={
              isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
          >
            {isExpanded ? "Less" : "More"}
          </Button>
        </Box>
      </Box>
      {isExpanded && (
        <Box mt={2}>
          <Typography variant="body1">{description}</Typography>
          {isApproved && (
            <Typography variant="body2" color="success.main" mt={1}>
              ✓ Approved
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
