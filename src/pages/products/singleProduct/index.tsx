import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductBasedOnName } from "../../../services/productServices";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import noimage from "../../../assets/images/noimage.jpg";
import QuantityAndPrice from "../../../components/products/components/QuantityAndPrice";
import { CounterButtons } from "../../../components/products/components/CounterButton";
import { cartProducts } from "../../../store";
import { CartProduct } from "../../../models/CartProduct.model";
import { Product } from "../../../models/Product.model";
import { addProductToCart } from "../../../utils/addProductToTheCart";
import BreadCrumbs from "../../../components/products/BreadCrumbs";
import Spinner from "../../../components/spinner";

export default function SingleProduct() {
  const location = useLocation();
  const productName = decodeURI(location.search).split("=")[1];
  const [product, setProduct] = useState<CartProduct | null>(null);
  const [counter, setCounter] = useState(0);
  const cartItems = cartProducts.value;

  useEffect(() => {
    const currItem = cartItems.find((item) => item.name === productName);
    if (currItem) {
      setProduct(currItem);
      setCounter(currItem.count);
    } else {
      getProductBasedOnName(productName, (product: Product) =>
        setProduct({ count: 0, ...product })
      );
      setCounter(0);
    }
  }, [cartItems, productName]);

  if (!product) {
    return <Spinner />;
  }

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
    <Container maxWidth="xl">
      <BreadCrumbs path={["products", product.category, product.name]} />
      <Box
        sx={{
          position: "relative",
          mt: 3,
          padding: 3,
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "5px",
            height: "auto",
            maxWidth: "500px",
            alignSelf: "center",
          }}
        >
          <img
            className="border-5"
            width={"100%"}
            height={"100%"}
            src={product.imageURL || noimage}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            minWidth: "300px",
            flexDirection: "column",
            alignItems: "start",
            px: 2,
            borderRadius: "5px",
            background: "#F6F6F6",
            alignSelf: "stretch",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "22px",
                md: "32px",
              },
            }}
          >
            {product.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              mt: "-10px",
              fontSize: {
                xs: "14px",
                md: "18px",
              },
            }}
          >
            {product.category}
          </Typography>
          <Box>
            <CounterButtons
              variant="row"
              count={counter}
              handleAddtoCart={handleAddtoCart}
            />
          </Box>
          <Box
            sx={{
              alignSelf: "end",
              marginTop: "auto",
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
    </Container>
  );
}
