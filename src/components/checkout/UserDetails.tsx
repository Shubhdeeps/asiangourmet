import React from "react";
import { UserDetailsDB } from "../../models/UserDetails.model";
import { Box, Button, Typography } from "@mui/material";

export default function UserDetails({
  user,
  setEditDetails,
}: {
  user: UserDetailsDB;
  setEditDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box
      sx={{
        background: "#F0F0F0",
        width: {
          xs: "100%",
          md: "500px",
        },
        minHeight: "40px",
        borderRadius: "10px",
        p: 2,
      }}
    >
      <Typography
        variant="inherit"
        sx={{
          fontWeight: 700,
          fontSize: 9,
          color: "secondary.main",
        }}
      >
        DELIVERY DETAILS
      </Typography>

      <Typography
        variant="inherit"
        sx={{
          fontWeight: 500,
          fontSize: 19,
        }}
      >
        {user.fname} {user.lname}
      </Typography>
      <Typography
        variant="inherit"
        sx={{
          fontWeight: 300,
          fontSize: 12,
        }}
      >
        {user.address}, {user.city}, {user.country}, {user.postalCode}
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => setEditDetails(true)} variant="outlined">
          Edit delivery details
        </Button>
      </Box>
    </Box>
  );
}
