import Box from "@mui/material/Box";
import { Chip, Divider } from "@mui/material";
import noimage from "../../assets/images/noimage.jpg";
import AddToCartButton from "./components/AddToCartButton";
import QuantityAndPrice from "./components/QuantityAndPrice";
import { Product } from "../../models/Product.model";
import { cartProducts } from "../../store";

function ProductCard({
  props,
}: {
  props: Product;
  // setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}) {
  const { name, imageURL, price, quantity, quantityType, id } = props;
  const currProduct = cartProducts.value.find((item) => item.id === id);
  const currProductCount = currProduct ? currProduct.count : 0;
  return (
    // <MotionWrapper onClick={handleClick}>
    <Box
      display="flex"
      className="glass"
      flexDirection="column"
      justifyContent="space-between"
      gap="5px"
      border="1px solid #DFDFDF"
      borderRadius="10px"
      sx={{
        height: "280px",
        width: {
          sm: "260px",
          xs: "275px",
        },
      }}
    >
      <Box width="100%" height="65%" borderRadius="10px">
        <img
          width="100%"
          height="100%"
          src={imageURL ? imageURL : noimage}
          className="border-r"
        />

        <Divider
          textAlign="left"
          sx={{
            marginTop: "-20.02px",
          }}
        >
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
              color: "black",
            }}
          />
        </Divider>
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
          <AddToCartButton product={props} initCount={currProductCount} />
        </Box>
        <QuantityAndPrice
          price={price}
          quantity={quantity}
          quantityType={quantityType}
        />
      </Box>
    </Box>
  );
}

export default ProductCard;
