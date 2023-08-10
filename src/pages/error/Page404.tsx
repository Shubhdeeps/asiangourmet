import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Page404 = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Page Not Found
      </Typography>
      <Typography align="center" gutterBottom>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <Button component={Link} to="/home" variant="contained" color="primary">
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default Page404;
