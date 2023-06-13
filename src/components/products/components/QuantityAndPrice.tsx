import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { numberTo2DigitDecimal } from "../../../utils/priceTo2DigitDecimal";

type Props = {
  price: number;
  quantity: number;
  quantityType: string;
  discount?: number;
};

export default function QuantityAndPrice({
  price,
  discount,
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
        data-testid="quantity-value"
        sx={{
          fontWeight: 700,
          fontSize: { md: "14px", xs: "9px" },
          color: "secondary.main",
          padding: "6px 12px",
          borderRadius: "12px",
          background: "#E1F3F4",
        }}
      >
        {quantity} {quantityType}
      </Box>

      <Box display="flex" alignItems={"center"} gap={0.5}>
        {!!discount && discount !== price && (
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: {
                md: "16px",
                xs: "10px",
              },
              color: "#C4C4C4",
              textDecoration: "line-through",
            }}
          >
            {numberTo2DigitDecimal(price)}
          </Typography>
        )}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: {
              md: "22px",
              xs: "16px",
            },
          }}
        >
          {numberTo2DigitDecimal(discount || price)}
        </Typography>
      </Box>
    </Box>
  );
}
