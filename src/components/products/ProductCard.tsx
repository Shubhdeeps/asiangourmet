import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import noimage from "../../assets/images/noimage.jpg";
import AddToCartButton from "./components/AddToCartButton";
import QuantityAndPrice from "./components/QuantityAndPrice";
import { Product } from "../../models/Product.model";
import { cartProducts } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
function ProductCard({ props }: { props: Product }) {
  const { name, imageURL, price, quantity, quantityType, id, category } = props;
  const currProduct = cartProducts.value.find((item) => item.id === id);
  const navigate = useNavigate();
  const discountedPrice = calculateDiscountPercentage(price, props.discount);

  const [itemCount, setItemCount] = useState(
    currProduct ? currProduct.count : 0
  );

  useEffect(() => {
    setItemCount(currProduct ? currProduct.count : 0);
  }, [currProduct]);

  const handleNavigate = () => {
    navigate(`/products/${category}/product?name=${encodeURI(name)}`);
  };
  return (
    <Box
      onClick={handleNavigate}
      display="flex"
      className="glass"
      flexDirection="column"
      justifyContent="space-between"
      gap="5px"
      border="1px solid #DFDFDF"
      borderRadius="10px"
      sx={{
        height: "380px",
        width: {
          sm: "260px",
          xs: "96%",
        },
      }}
    >
      <Box width="100%" height="65%" borderRadius="10px">
        {!!discountedPrice && (
          <Box
            sx={{
              position: "absolute",
              top: 15,
            }}
          >
            <Chip
              sx={{
                borderRadius: "0px 20px 20px 0px",
                px: 1,
                fontSize: "14px",
              }}
              color="error"
              size="medium"
              label={`SAVE ${discountedPrice}`}
            />
          </Box>
        )}
        <img
          width="100%"
          height="100%"
          src={imageURL ? imageURL : noimage}
          className="border-r"
        />
        <Chip
          label={name}
          variant="filled"
          color="default"
          sx={{
            background: "rgba(215, 215, 215, 0.5)",
            backdropFilter: "blur(10px)",
            fontSize: "16px",
            fontWeight: 600,
            px: 0.5,
            py: 2,
            mt: "-40px",
            ml: 1,
            color: "black",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingX: "20px",

          mb: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
        >
          <AddToCartButton product={props} initCount={itemCount} />
        </Box>
        <QuantityAndPrice
          price={price}
          quantity={quantity}
          quantityType={quantityType}
          discount={props.discount}
        />
      </Box>
    </Box>
  );
}

export default ProductCard;
