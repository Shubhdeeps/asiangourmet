import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { cartProducts } from "../../store";

export default function CartTotalTypography() {
  const cartItems = cartProducts.value;
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const totalForCurrItem = item.count * (item.discount || item.price);
      total += totalForCurrItem;
    });
    setCartTotal(total);
  }, [cartItems]);

  return (
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
  );
}
