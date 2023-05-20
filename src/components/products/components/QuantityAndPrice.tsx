import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  price: number;
  quantity: number;
  quantityType: string;
};

export default function QuantityAndPrice({
  price,
  quantity,
  quantityType,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          fontWeight: 700,
          fontSize: "14px",
          color: "secondary.main",
          padding: "6px 12px",
          borderRadius: "12px",
          background: "#E1F3F4",
        }}
      >
        {quantity} {quantityType}
      </Box>

      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "22px",
        }}
      >
        €{price}
      </Typography>
    </Box>
  );
}
