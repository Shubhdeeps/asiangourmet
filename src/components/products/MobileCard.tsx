import Box from "@mui/material/Box";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import noimage from "../../assets/images/noimage.jpg";
import { Product } from "../../models/Product.model";
import { cartProducts } from "../../store";
import { useEffect, useState } from "react";
import MobileAddToCartButton from "./components/MobileAddToCartButton";
import { useNavigate } from "react-router-dom";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import Chip from "@mui/material/Chip";
import { numberTo2DigitDecimal } from "../../utils/priceTo2DigitDecimal";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "#FAFCFE",
  },
}));

export default function MobileCard({ props }: { props: Product }) {
  const {
    name,
    imageURL,
    price,
    quantity,
    quantityType,
    id,
    category,
    discount,
  } = props;
  const currProduct = cartProducts.value.find((item) => item.id === id);
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(
    currProduct ? currProduct.count : 0
  );

  const discountedPrice = calculateDiscountPercentage(price, props.discount);

  const handleNavigate = () => {
    navigate(`/products/${category}/product?name=${encodeURI(name)}`);
  };
  useEffect(() => {
    setItemCount(currProduct ? currProduct.count : 0);
  }, [currProduct]);
  return (
    <StyledBadge badgeContent={itemCount} color="success">
      <Box
        onClick={handleNavigate}
        display="flex"
        className="glass"
        flexDirection="column"
        gap="5px"
        border="1px solid #F7F7F7"
        sx={{
          height: {
            md: "380px",
            xs: "180px",
          },
          width: {
            md: "260px",
            xs: "130px",
          },
        }}
      >
        <Box width="100%" height="55%">
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
                  fontSize: "10px",
                }}
                color="error"
                size="medium"
                label={`SAVE ${discountedPrice}`}
              />
            </Box>
          )}
          <img width="100%" height="100%" src={imageURL ? imageURL : noimage} />
        </Box>
        <Box
          sx={{
            px: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "9px",
              fontWeight: 700,
            }}
          >
            {name} ({quantityType})
          </Typography>
          <Typography
            sx={{
              fontSize: "8px",
              fontWeight: 300,
            }}
          >
            €{price / quantity}/{quantity}
            {quantityType}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={0.5}
            sx={{
              mt: "auto",
            }}
          >
            {discount && discount !== price && (
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "9px",
                  mb: "-7px",
                  color: "#C4C4C4",
                  textDecoration: "line-through",
                }}
              >
                {numberTo2DigitDecimal(price)}
              </Typography>
            )}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {numberTo2DigitDecimal(discount || price)}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#30C4D9",
              borderRadius: "15px 0px 0px 0px",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <MobileAddToCartButton product={props} initCount={itemCount} />
          </Box>
        </Box>
      </Box>
    </StyledBadge>
  );
}
