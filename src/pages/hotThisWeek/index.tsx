import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Fragment, useEffect, useRef, useState } from "react";
import { getAllPopularProducts } from "../../services/productServices";
import { Product } from "../../models/Product.model";
import Spinner from "../../components/spinner";
import MainCard from "../../components/products/MainCard";

export default function HotThisWeek() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [reRender, setReRender] = useState(false);
  const scrollPositionRef = useRef<{ [category: string]: number }>({});
  // const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  useEffect(() => {
    getAllPopularProducts(setProducts);

    //set previous scroll if avaible else set zero
    const scrollYOfNewCategory = scrollPositionRef.current["popular-products"]
      ? scrollPositionRef.current["popular-products"]
      : 0;
    window.scrollTo(0, scrollYOfNewCategory);

    return () => {
      // preserve previous category scroll position
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollPositionRef.current["popular-products"] = window.scrollY;
    };
  }, [reRender]);

  useEffect(() => {
    if (!products) {
      setTimeout(() => {
        setReRender(true);
        console.log("re-render");
      }, 500);
    }
  }, [products]);

  if (!products) {
    return <Spinner />;
  }

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          pt: 5,
        }}
      >
        {products.length === 0 && (
          <>
            <Typography>No Products</Typography>
          </>
        )}
        <Box
          sx={{
            width: "100%",
            mb: {
              sm: "30px",
              xs: "120px",
            },
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            // display: "grid",
            // gridTemplateColumns: {
            //   sm: "repeat(auto-fill, 270px)",
            //   xs: "repeat(auto-fill, 140px)",
            // },
            // gridGap: {
            //   sm: "1rem",
            //   xs: "0.5rem",
            // },
            justifyContent: "center",
          }}
        >
          {products.map((product) => {
            return (
              <Fragment key={product.id}>
                <MainCard product={product} applyMediaQuery />
              </Fragment>
            );
          })}
        </Box>
      </Container>
    </>
  );
}
