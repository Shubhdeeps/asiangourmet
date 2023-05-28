import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { cartProducts } from "../../store";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const cartItems = cartProducts.value;

  const handleConfirmOrder = () => {
    navigate("/confirm-order");
  };

  return (
    <Box
      sx={{
        my: 5,
      }}
    >
      <OrderSummary products={cartItems} />

      <Button
        onClick={handleConfirmOrder}
        sx={{
          mt: 2,
          position: "relative",
          marginLeft: 2,
        }}
        color="secondary"
        variant="outlined"
      >
        Confirm order
      </Button>
    </Box>
  );
}
