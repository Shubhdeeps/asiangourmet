import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { CounterButtons } from "../products/components/CounterButton";

import { CartProduct } from "../../models/CartProduct.model";
import { addProductToCart } from "../../utils/addProductToTheCart";
import { numberTo2DigitDecimal } from "../../utils/priceTo2DigitDecimal";
// import noimage from "../../assets/images/noimage.jpg";
export default function CartItem({
  product,
  hideCounter,
}: {
  product: CartProduct;
  hideCounter?: boolean;
}) {
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
    addProductToCart(product, action);

    if (action === "ADD") {
      setCounter((prevState) => prevState + 1);
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };
  const { discount, price, count } = product;
  const finalPrize =
    !!discount && discount !== price ? price : discount || price;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        mx: 2,
        background: "#F6F6F6",
        p: 1,
        py: 2,
        borderRadius: "10px",
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
            variant="caption"
            sx={{
              fontWeight: 800,

              fontSize: {
                md: "19px",
                sm: "16px",
                xs: "8px",
              },
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 200,
              width: "70%",
              fontSize: {
                md: "15px",
                sm: "8px",
                xs: "5px",
              },
            }}
          >
            {product.description}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                md: "22px",
                xs: "16px",
              },
            }}
          >
            {numberTo2DigitDecimal(finalPrize * count)}
          </Typography>
        </Box>

        {!hideCounter && (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              borderRadius: "10px",
            }}
          >
            <CounterButtons
              handleAddtoCart={handleAddtoCart}
              count={counter}
              variant={"column"}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
