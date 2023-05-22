import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cartProducts } from "../../store";
import { useState, useEffect } from "react";
export default function CartTotal() {
  const cartItems = cartProducts.value;
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const totalForCurrItem = item.count * item.price;
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
        Total: €{cartTotal}
      </Typography>
      <Button
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
