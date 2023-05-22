import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { CounterButtons } from "../products/components/CounterButton";
import { CartProduct } from "../../models/CartProduct.model";
import { addProductToCart } from "../../utils/addProductToTheCart";

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
    addProductToCart(product, action);

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
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          gap: 4,
          height: {
            md: "140px",
            sm: "90px",
            xs: "52px",
          },
          paddingInlineEnd: 3,
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
          display="flex"
          flexDirection="column"
          alignItems="start"
          height="80%"
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
          <Typography
            sx={{
              fontWeight: 400,
              color: "text.secondary",
              fontSize: {
                md: "18px",
                sm: "14px",
                xs: "9px",
              },
              mt: {
                md: "-8px",
                xs: "-4px",
              },
            }}
          >
            {product.quantity} {product.quantityType}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                md: "32px",
                sm: "24px",
                xs: "14px",
              },
              marginRight: "auto",
            }}
          >
            €{product.price * counter}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F5F5F5",
          borderRadius: "10px",
        }}
      >
        <CounterButtons
          handleAddtoCart={handleAddtoCart}
          count={counter}
          variant={"column-reverse"}
        />
      </Box>
    </Box>
  );
}
