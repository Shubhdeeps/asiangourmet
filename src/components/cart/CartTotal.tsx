import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cartProducts } from "../../store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CartTotal() {
  const cartItems = cartProducts.value;
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const totalForCurrItem = item.count * (item.discount || item.price);
      total += totalForCurrItem;
    });
    setCartTotal(total);
  }, [cartItems]);

  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
        px: 2,
        py: 1,
        position: "relative",
        top: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "18px",
            md: "24px",
          },
        }}
      >
        Total: €{(Math.round(cartTotal * 100) / 100).toFixed(2)}
      </Typography>
      <Button
        onClick={() => navigate("/checkout")}
        disabled={cartTotal === 0}
        size="small"
        color="info"
        variant="contained"
      >
        Checkout
      </Button>
    </Box>
  );
}
