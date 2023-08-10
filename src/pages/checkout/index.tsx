import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { cartProducts } from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../../components/cart/CartItem";
import { Container, Typography } from "@mui/material";
import CartTotalTypography from "../../components/cart/CartTotalTypography";
import { getCurrUserProfile } from "../../firebase/functions/getCurrUserProfile";
import { UserDetailsDB } from "../../models/UserDetails.model";
import UserRegistration from "../../components/checkout/UserRegistration";

export default function Checkout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetailsDB | null>(null);
  const [disableConfirm, setDisableConfirm] = useState(true);
  const cartItems = cartProducts.value;

  useEffect(() => {
    (async () => {
      const user = await getCurrUserProfile();
      setUser(user);
    })();
  }, []);
  const handleConfirmOrder = () => {
    navigate("/confirm-order");
  };

  return (
    <Container
      className="glass"
      sx={{
        position: "relative",
        zIndex: 1,
        // background: "#F0F0F0",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 24,
          mt: 4,
        }}
      >
        Checkout
      </Typography>
      {user && (
        <UserRegistration setDisableConfirm={setDisableConfirm} user={user} />
      )}
      <Box
        sx={{
          mb: 5,
          mt: 2,
          height: "400px",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #F0F0F0",
          borderRadius: "10px",
          gap: 1,
        }}
      >
        {cartItems.map((product) => {
          return (
            <Box key={product.id}>
              <CartItem hideCounter product={product} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          pb: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CartTotalTypography />
        <Button
          disabled={disableConfirm}
          onClick={handleConfirmOrder}
          variant="outlined"
        >
          Confirm order
        </Button>
      </Box>
    </Container>
  );
}
