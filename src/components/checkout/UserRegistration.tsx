import { useState, useMemo } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { UserDetailsDB } from "../../models/UserDetails.model";
import { updateUserDetails } from "../../firebase/functions/getCurrUserProfile";
import UserDetails from "./UserDetails";

export default function UserRegistration({
  user,
  setDisableConfirm,
}: {
  user: UserDetailsDB;
  setDisableConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetailsDB>(() => user);
  const [editDetails, setEditDetials] = useState(false);

  const anyFieldEmpty = useMemo(() => {
    console.log("running memo");
    const values = Object.values(userDetails);
    const allFieldsFilled =
      values.some((value) => value === "") ||
      JSON.stringify(userDetails) === JSON.stringify(user);
    if (!values.some((value) => value === "")) {
      //enable the confirm button only when all fields are filled
      setDisableConfirm(false);
    }
    return allFieldsFilled;
  }, [userDetails]);

  const handleUpdateClick = () => {
    const values = Object.values(userDetails);
    if (values.some((value) => value === "")) {
      setError("All Field Required");
      return;
    } else {
      setError(null);
      setEditDetials(false);
      updateUserDetails(userDetails);
    }
  };

  function handleChange(value: string, key: keyof UserDetailsDB) {
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [key]: value,
      };
    });
  }

  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      {!editDetails ? (
        <UserDetails setEditDetails={setEditDetials} user={userDetails} />
      ) : (
        <Box
          sx={{
            pb: 5,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 2,
          }}
        >
          <Typography
            variant="inherit"
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              color: "secondary.main",
              textAlign: "center",
              my: 2,
            }}
          >
            Delivery details
          </Typography>

          <>
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              value={userDetails.fname}
              label="First name"
              type="text"
              name="fname"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              value={userDetails.lname}
              label="Last name"
              type="text"
              name="lname"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              label="Email"
              value={userDetails.email}
              type="email"
              name="email"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              label="Phone number"
              value={userDetails.phoneNumber}
              type="tel"
              name="phoneNumber"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              label="Address"
              value={userDetails.address}
              type="text"
              name="address"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              label="City"
              value={userDetails.city}
              type="text"
              name="city"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              label="Country"
              value={userDetails.country}
              type="text"
              name="country"
            />
            <CustomTextField
              onChange={(e: any) => handleChange(e.target.value, e.target.name)}
              label="Postal code"
              type="text"
              value={userDetails.postalCode}
              name="postalCode"
            />
          </>

          {error && <Alert severity="error">{error}!</Alert>}
          <Button
            disabled={anyFieldEmpty}
            onClick={handleUpdateClick}
            sx={{
              px: 7,
              borderRadius: "50px",
            }}
            color="secondary"
            variant="outlined"
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
}

function CustomTextField(props: any) {
  return (
    <TextField
      sx={{
        width: {
          md: "700px",
          sm: "500px",
          xs: "270px",
        },
      }}
      {...props}
      required
      variant="standard"
      color="secondary"
    />
  );
}
