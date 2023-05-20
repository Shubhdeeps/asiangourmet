import WaveContainer from "./components/WaveContainer";
import Heading from "./components/Heading";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import ProductCard from "../products/ProductCard";
import dragonfruit from "../../assets/images/topselling/dragonfruit.png";
import mango from "../../assets/images/topselling/mango.png";
import okra from "../../assets/images/topselling/okra.png";
import pipinomelon from "../../assets/images/topselling/pipinomelon.png";
import { Product } from "../../models/Product.model";
const foodProducts: Product[] = [
  {
    id: "1",
    name: "Dragon Fruit",
    imageURL: dragonfruit,
    price: 6.99,
    quantity: 2,
    category: "",
    quantityType: "kg",
  },
  {
    id: "2",
    name: "Mangoes",
    imageURL: mango,
    price: 5.25,
    quantity: 300,
    category: "",
    quantityType: "g",
  },
  {
    id: "3",
    name: "Okra",
    imageURL: okra,
    price: 12.75,
    quantity: 1,
    category: "",
    quantityType: "kg",
  },
  {
    id: "4",
    name: "Pipino Melon",
    imageURL: pipinomelon,
    price: 3.5,
    quantity: 1,
    category: "",
    quantityType: "pcs",
  },
];
export default function HotSelling() {
  return (
    <WaveContainer>
      <Heading title="Hot Selling Products" />
      <Box
        sx={{
          display: "flex",
          // flexDirection: { sm: "column", xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {foodProducts.map((product) => {
          return (
            <Fragment key={product.id}>
              <ProductCard props={product} />
            </Fragment>
          );
        })}
      </Box>
    </WaveContainer>
  );
}
