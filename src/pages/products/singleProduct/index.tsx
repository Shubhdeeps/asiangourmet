import { useLocation } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import {
  getDataBasedOnFilters,
  getProductBasedOnName,
} from "../../../services/productServices";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import noimage from "../../../assets/images/noimage.jpg";
import QuantityAndPrice from "../../../components/products/components/QuantityAndPrice";
import { cartProducts } from "../../../store";
import { CartProduct } from "../../../models/CartProduct.model";
import { Product } from "../../../models/Product.model";
import BreadCrumbs from "../../../components/products/BreadCrumbs";
import Spinner from "../../../components/spinner";
import { Chip } from "@mui/material";
import AddToCartButton from "../../../components/products/components/AddToCartButton";
import ProductCard from "../../../components/products/ProductCard";
import MobileCard from "../../../components/products/MobileCard";

export default function SingleProduct() {
  const location = useLocation();
  const productName = decodeURI(location.search).split("=")[1];
  const [product, setProduct] = useState<CartProduct | null>(null);
  const [counter, setCounter] = useState(0);
  const cartItems = cartProducts.value;
  const [products, setProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    const category = product?.category;
    if (category) {
      getDataBasedOnFilters(category, setProducts);
    }
  }, [product?.category]);

  if (!product) {
    return <Spinner />;
  }

  const isOutOfStock = !!product.outOfStock;

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 5,
      }}
    >
      <BreadCrumbs path={["products", product.category, product.name]} />
      <Box
        className="glass"
        sx={{
          position: "relative",
          mt: 5,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <span>
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
                xs: "9px",
                md: "14px",
              },
            }}
          >
            {product.category}
          </Typography>
        </span>
        {/* Image */}
        <Box
          sx={{
            borderRadius: "5px",
            height: "auto",
            width: "70%",
            maxWidth: "700px",
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

        {/* Lower bar */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {!isOutOfStock && (
            <>
              <AddToCartButton product={product} initCount={counter} />
            </>
          )}
          {isOutOfStock ? (
            <Chip
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: "0px 0px 10px 0px",
                fontSize: "18px",
                p: 1,
                color: "error.main",
              }}
              size="medium"
              label="OUT OF STOCK"
            />
          ) : (
            <>
              <QuantityAndPrice
                price={product.price}
                quantity={product.quantity}
                quantityType={product.quantityType}
                discount={product.discount}
              />
            </>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          py: 2,
          mb: 10,
          pb: 5,
        }}
        className="glass"
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 500,
            px: 2,
          }}
        >
          You might also like
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            overflowY: "hidden",
            height: {
              xs: "250px",
              sm: "450px",
            },
            mt: -3,
            px: 2,
          }}
        >
          {products.map((product) => {
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
      </Box>
    </Container>
  );
}
