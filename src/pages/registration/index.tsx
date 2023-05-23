import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";

export default function Register() {
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const details = useRef({
    fname: "",
    lname: "",
    address: "",
    city: "Tallinn",
    country: "Estonia",
    postalCode: "",
  });
  const handleNext = () => {
    const values = Object.values(details.current);
    if (values.some((value) => value === "")) {
      console.log(details.current);

      setError("All Field Required");
      return;
    } else {
      setError(null);
      setPage((prevState) => prevState + 1);
    }
  };
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
        {page === 1 && (
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
              onChange={(e: any) =>
                (details.current.postalCode = e.target.value)
              }
              label="Postal code"
              type="text"
            />
          </>
        )}
        {page === 2 && (
          <>
            <CustomTextField label="Phone number" type="tel" />
          </>
        )}
        {page === 3 && (
          <>
            <CustomTextField label="Enter Code" type="number" />
          </>
        )}
        {error && <Alert severity="error">{error}!</Alert>}
        <Button
          onClick={handleNext}
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
      variant="filled"
    />
  );
}
