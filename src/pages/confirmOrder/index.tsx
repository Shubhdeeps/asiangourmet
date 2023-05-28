import { useNavigate } from "react-router-dom";
import { createNewOrder } from "../../firebase/functions/createNewOrder";
import { cartProducts } from "../../store";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Spinner from "../../components/spinner";
import { Box, Button, Container, Typography } from "@mui/material";
import { emptyCart } from "../../services/cartServices";

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const cartItems = cartProducts.value;
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (cartItems.length !== 0) {
          setLoading(true);
          await createNewOrder(cartItems);

          //clear the cart and local db
          cartProducts.value = [];
          emptyCart();
          setLoading(false);
        }
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
      }
    })();
  }, [cartItems]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <>
        <Alert color="error">{error}</Alert>
        <Button
          sx={{
            mt: 1,
          }}
          onClick={() => navigate("/")}
          color="info"
          variant="outlined"
        >
          Back to home
        </Button>
      </>
    );
  }
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 10,
          gap: 2,
        }}
      >
        <Typography variant="h6" color="success.main">
          Your order has been confirmed!
        </Typography>
        <Button onClick={() => navigate("/")} color="info" variant="outlined">
          Back to home
        </Button>
      </Box>
    </Container>
  );
}
