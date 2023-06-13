import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { CounterButtons } from "../products/components/CounterButton";

import { CartProduct } from "../../models/CartProduct.model";
// import { addProductToCart } from "../../utils/addProductToTheCart";
import QuantityAndPrice from "../products/components/QuantityAndPrice";
// import noimage from "../../assets/images/noimage.jpg";
export default function CartItem({ product }: { product: CartProduct }) {
  const [counter, setCounter] = useState(product.count);

  useEffect(() => {
    setCounter(product.count);
  }, [product.count]);

  const handleAddtoCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: "ADD" | "REMOVE"
  ) => {
    //prevent click to parent element
    e.stopPropagation();
    // addProductToCart(product, action);

    if (action === "ADD") {
      setCounter((prevState) => prevState + 1);
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        mx: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 1,
          height: {
            md: "140px",
            sm: "90px",
            xs: "52px",
          },
          paddingInlineEnd: 0,
        }}
      >
        <Box
          sx={{
            borderRadius: "10px 0px 0px 10px",
            height: "100%",
            width: {
              md: "130px",
              sm: "100px",
              xs: "70px",
            },
          }}
        >
          <img
            className="border-r2"
            height="100%"
            width="100%"
            src={product.imageURL}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                md: "22px",
                sm: "18px",
                xs: "10px",
              },
            }}
          >
            {product.name}
          </Typography>
          <Box
            sx={{
              background: "#F5F5F5",
              borderRadius: "10px",
            }}
          >
            <CounterButtons
              handleAddtoCart={handleAddtoCart}
              count={counter}
              variant={"row"}
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          <QuantityAndPrice
            price={product.price}
            quantity={product.quantity}
            quantityType={product.quantityType}
            discount={product.discount}
          />
        </Box>
      </Box>
    </Box>
  );
}
