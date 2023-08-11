import { useState, useEffect } from "react";
import WaveContainer from "./components/WaveContainer";
import Heading from "./components/Heading";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import { Product } from "../../models/Product.model";
import { getProductBasedOnName } from "../../services/productServices";
import LoaderScreen from "../loader/LoaderScreen";
import MainCard from "../products/MainCard";

const hotSellingNames = ["Dragon Fruit", "Mangosteen", "Okra", "Pepino Melon"];
export default function HotSelling() {
  const [hotProduct, setHotProducts] = useState<Product[]>([]);
  useEffect(() => {
    for (const product of hotSellingNames) {
      getProductBasedOnName(product, (product) => {
        if (product) {
          setHotProducts((prevProducts) => [...prevProducts, product]);
        }
      });
    }
  }, []);
  if (!hotProduct.length) {
    return <LoaderScreen />;
  }
  return (
    <WaveContainer>
      <Heading title="Hot Selling Products" />
      <Box
        sx={{
          boxSizing: "border-box",
          width: "fit-content",
          mb: {
            sm: "30px",
            xs: "120px",
          },
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          // gridTemplateColumns: {
          //   sm: "repeat(auto-fill, 260px)",
          //   xs: "repeat(auto-fill, 130px)",
          // },
          // gridGap: {
          //   sm: "1rem",
          //   xs: "0.2rem",
          // },
          justifyContent: "center",
          alignItems: "center",
          mt: {
            xs: 0,
            md: 5,
          },
        }}
      >
        {hotProduct.map((product) => {
          return (
            <Fragment key={product.id}>
              <MainCard product={product} />
            </Fragment>
          );
        })}
      </Box>
    </WaveContainer>
  );
}
