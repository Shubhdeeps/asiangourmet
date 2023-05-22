import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useEffect } from "react";
import { cartProducts } from "../../store";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,

    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Cart({ setOpen }: { setOpen: () => void }) {
  const cartCount = cartProducts.value.length;
  const [cartItemsCount, setCartItemCount] = useState(cartCount);

  useEffect(() => {
    setCartItemCount(cartCount);
  }, [cartCount]);

  return (
    <Tooltip title="Cart">
      <IconButton aria-label="cart" onClick={setOpen}>
        <StyledBadge badgeContent={cartItemsCount} color="warning">
          <ShoppingCartIcon fontSize="large" />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  );
}
