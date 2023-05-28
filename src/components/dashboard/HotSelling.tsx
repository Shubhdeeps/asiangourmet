import { useState, useEffect } from "react";
import WaveContainer from "./components/WaveContainer";
import Heading from "./components/Heading";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import ProductCard from "../products/ProductCard";
import { Product } from "../../models/Product.model";
import MobileCard from "../products/MobileCard";
import { getProductBasedOnName } from "../../services/productServices";

const hotSellingNames = ["Dragon Fruit", "Mangosteen", "Okra", "Pepino Melon"];
export default function HotSelling() {
  const [hotProduct, setHotProducts] = useState<Product[]>([]);
  useEffect(() => {
    for (const product of hotSellingNames) {
      getProductBasedOnName(product, (product) => {
        setHotProducts((prevProducts) => [...prevProducts, product]);
      });
    }
  }, []);

  return (
    <WaveContainer>
      <Heading title="Hot Selling Products" />
      <Box
        sx={{
          width: "100%",
          mb: {
            sm: "30px",
            xs: "120px",
          },
          display: "inline-grid",
          gridTemplateColumns: {
            sm: "repeat(auto-fill, 260px)",
            xs: "repeat(auto-fill, 130px)",
          },
          gridGap: {
            sm: "1rem",
            xs: "0.2rem",
          },
          justifyContent: "center",
          mt: 5,
        }}
      >
        {hotProduct.map((product) => {
          return (
            <Fragment key={product.id}>
              <Box
                display={{
                  xs: "none",
                  sm: "flex",
                }}
              >
                <ProductCard props={product} />
              </Box>
              <Box
                display={{
                  xs: "flex",
                  sm: "none",
                }}
              >
                <MobileCard props={product} />
              </Box>
            </Fragment>
          );
        })}
      </Box>
    </WaveContainer>
  );
}
