import Container from "@mui/material/Container";
import ProductCard from "../../components/products/ProductCard";
import Box from "@mui/material/Box";
import { Fragment, useEffect, useRef, useState } from "react";
import BreadCrumbs from "../../components/products/BreadCrumbs";
import FloatingTabs from "../../components/products/FloatingTabs";
import { useParams } from "react-router-dom";
import { getDataBasedOnFilters } from "../../services/productServices";
import { Product } from "../../models/Product.model";
import SearchBar from "../../components/search/SearchBar";
import Spinner from "../../components/spinner";
import MobileCard from "../../components/products/MobileCard";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [reRender, setReRender] = useState(false);
  const scrollPositionRef = useRef<{ [category: string]: number }>({});
  const path = location.pathname.split("/").filter((str) => str !== "");
  // const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (category) {
      getDataBasedOnFilters(category, setProducts);

      //set previous scroll if avaible else set zero
      const scrollYOfNewCategory = scrollPositionRef.current[category]
        ? scrollPositionRef.current[category]
        : 0;
      window.scrollTo(0, scrollYOfNewCategory);
    }

    return () => {
      if (category) {
        // preserve previous category scroll position
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollPositionRef.current[category] = window.scrollY;
      }
    };
  }, [category, reRender]);
  useEffect(() => {
    if (!products.length) {
      setTimeout(() => {
        setReRender(true);
        console.log("re-render");
      }, 500);
    }
  }, [products.length]);

  // function handleClose() {
  //   setSingleProduct(null);
  // }

  if (!products.length) {
    return <Spinner />;
  }

  return (
    <>
      <Container maxWidth="xl">
        {/* {singleProduct && (
          <ProductPopup
            open={!!singleProduct}
            product={singleProduct}
            onClose={handleClose}
          />
        )} */}
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: {
              md: "space-between",
              xs: "center",
            },
          }}
        >
          <Box sx={{ my: "50px", display: { xs: "none", md: "flex" } }}>
            <BreadCrumbs path={path} />
          </Box>
          <SearchBar />
        </Box>
        <Box
          sx={{
            width: "100%",
            mb: {
              sm: "30px",
              xs: "120px",
            },
            display: "grid",
            gridTemplateColumns: {
              sm: "repeat(auto-fill, 270px)",
              xs: "repeat(auto-fill, 140px)",
            },
            gridGap: {
              sm: "1rem",
              xs: "0.5rem",
            },
            justifyContent: "center",
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
      </Container>
      <FloatingTabs />
    </>
  );
}
