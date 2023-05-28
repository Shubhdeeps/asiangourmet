import { useRef, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import {
  Alert,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { createNewUser } from "../../firebase/functions/signInWithGoogle";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";

export default function Register() {
  const navigate = useNavigate();
  const currUserId = auth.currentUser?.uid;
  const [error, setError] = useState<string | null>(null);
  const details = useRef({
    fname: "",
    lname: "",
    address: "",
    city: "Tallinn",
    country: "Estonia",
    postalCode: "",
  });

  const handleClick = () => {
    const values = Object.values(details.current);
    if (values.some((value) => value === "")) {
      setError("All Field Required");
      return;
    } else {
      setError(null);
      createNewUser(details.current);
    }
  };

  useEffect(() => {
    if (currUserId) {
      navigate(-1);
    }
  }, [currUserId, navigate]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 5,
      }}
    >
      <FormControl
        sx={{
          pb: 5,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          background: "#F1F1F1",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            color: "secondary.main",
            textAlign: "center",
            my: 2,
          }}
        >
          Create Account
        </Typography>

        <>
          <CustomTextField
            onChange={(e: any) => (details.current.fname = e.target.value)}
            label="First name"
            type="text"
          />
          <CustomTextField
            onChange={(e: any) => (details.current.lname = e.target.value)}
            label="Last name"
            type="text"
          />
          <CustomTextField
            onChange={(e: any) => (details.current.address = e.target.value)}
            label="Address"
            type="text"
          />
          <CustomTextField
            onChange={(e: any) => (details.current.city = e.target.value)}
            label="City"
            type="text"
          />
          <CustomTextField
            onChange={(e: any) => (details.current.country = e.target.value)}
            label="Country"
            type="text"
          />
          <CustomTextField
            onChange={(e: any) => (details.current.postalCode = e.target.value)}
            label="Postal code"
            type="text"
          />
        </>

        {error && <Alert severity="error">{error}!</Alert>}
        <Button
          onClick={handleClick}
          sx={{
            px: 5,
          }}
          color="secondary"
          variant="outlined"
        >
          Continue
        </Button>
      </FormControl>
    </Container>
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
      variant="outlined"
    />
  );
}
