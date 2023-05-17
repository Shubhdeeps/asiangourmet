import Box from "@mui/material/Box";
import ProductHighlighted from "./components/ProductHighlighted";

export default function SectionTwo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        flexDirection: {
          md: "row",
          xs: "column",
        },
      }}
    >
      <ProductHighlighted heading="200+" title="PRODUCTS" color="red" />
      <ProductHighlighted heading="20+" title="CATEGORIES" color="yellow" />
      <ProductHighlighted heading="10+" title="COUNTRIES" color="blue" />
    </Box>
  );
}
