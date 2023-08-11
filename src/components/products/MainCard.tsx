import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import MobileCard from "./MobileCard";
import { Product } from "../../models/Product.model";
export default function MainCard({
  product,
  applyMediaQuery,
}: {
  product: Product;
  applyMediaQuery?: boolean;
}) {
  let mediaQueryForProductCard: { [key: string]: any } = {
    "": {},
  };
  let mediaQueryForMobileCard: { [key: string]: any } = {
    "": {},
  };

  if (applyMediaQuery) {
    mediaQueryForProductCard = {
      "@media (max-width: 330px)": {
        display: "flex",
      },
    };
    mediaQueryForMobileCard = {
      "@media (max-width: 330px)": {
        display: "none",
      },
    };
  }
  return (
    <>
      <Box
        display={{
          xs: "none",
          sm: "flex",
        }}
        sx={mediaQueryForProductCard}
      >
        <ProductCard props={product} />
      </Box>
      <Box
        display={{
          xs: "flex",
          sm: "none",
        }}
        sx={mediaQueryForMobileCard}
      >
        <MobileCard props={product} />
      </Box>
    </>
  );
}
