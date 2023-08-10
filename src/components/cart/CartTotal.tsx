import Box from "@mui/material/Box";
import CartTotalTypography from "./CartTotalTypography";
export default function CartTotal() {
  return (
    <Box
      sx={{
        background: "#F7F7F7",
        px: 2,
        py: 1,
        top: "0px",
        zIndex: 3,
        width: "100%",
        position: "fixed",
      }}
    >
      <CartTotalTypography />
    </Box>
  );
}
