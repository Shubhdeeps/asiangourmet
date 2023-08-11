import Box from "@mui/material/Box";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import noimage from "../../assets/images/noimage.jpg";
import { Product } from "../../models/Product.model";
import { cartProducts } from "../../store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateDiscountPercentage } from "../../utils/calculateDiscountPercentage";
import Chip from "@mui/material/Chip";
import { numberTo2DigitDecimal } from "../../utils/priceTo2DigitDecimal";
import MotionWrapper from "./components/MotionWrapper";
import AddToCartButton from "./components/AddToCartButton";

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

  const isOutOfStock = !!props.outOfStock;
  const discountedPrice = calculateDiscountPercentage(price, props.discount);

  const handleNavigate = () => {
    navigate(`/products/${category}/product?name=${encodeURI(name)}`);
  };

  useEffect(() => {
    setItemCount(currProduct ? currProduct.count : 0);
  }, [currProduct]);

  return (
    <MotionWrapper itemCount={itemCount}>
      <StyledBadge badgeContent={itemCount} color="success">
        <Box
          onClick={handleNavigate}
          display="flex"
          className="glass"
          flexDirection="column"
          gap="5px"
          border="1px solid #DFDFDF"
          sx={{
            height: "180px",
            width: "170px",
            "@media (max-width: 552px)": {
              width: "160px",
            },
            "@media (max-width: 528px)": {
              width: "140px",
            },
            "@media (max-width: 468px)": {
              width: "170px",
            },
            "@media (max-width: 380px)": {
              width: "160px",
            },
            "@media (max-width: 368px)": {
              width: "150px",
            },
            "@media (max-width: 348px)": {
              width: "140px",
            },
            "@media (max-width: 328px)": {
              width: "170px",
            },
            px: "auto",
            borderRadius: "10px",
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
            <img
              width="100%"
              height="100%"
              className="border-r"
              src={imageURL ? imageURL : noimage}
            />
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
              {name} ({quantity}
              {quantityType})
            </Typography>
            <Typography
              sx={{
                fontSize: "8px",
                fontWeight: 300,
              }}
            >
              {decodeQuantityIntoSimplerForm(
                quantityType as "g",
                quantity,
                discount || price
              )}
              {/* {numberTo2DigitDecimal((discount || price) / quantity)}/
              {quantityType} */}
            </Typography>
            {isOutOfStock ? (
              <Chip
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  borderRadius: "0px",
                  fontSize: "10px",
                  color: "error.main",
                }}
                size="small"
                label="OUT OF STOCK"
              />
            ) : (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="start"
                gap={0.5}
                sx={{
                  mt: "auto",
                }}
              >
                {!!discount && discount !== price && (
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
            )}
            <Box
              sx={{
                backgroundColor: isOutOfStock ? "#E4E4E4" : "secondary.light",
                border: "1px solid #C7E5E9",
                borderRadius: "10px 0px 9px 0px",
                width: "37px",
                position: "absolute",
                right: -1,
                bottom: -1,
                transform: "all .5s linear",
              }}
            >
              <AddToCartButton
                hideCounter
                product={props}
                initCount={itemCount}
              />
            </Box>
          </Box>
        </Box>
      </StyledBadge>
    </MotionWrapper>
  );
}

function decodeQuantityIntoSimplerForm(
  quantityType: "g" | "pcs" | "kg",
  quantity: number,
  price: number
) {
  if (quantityType.toLowerCase() === "g") {
    return `${numberTo2DigitDecimal((price / quantity) * 1000)}/kg`;
  }
  if (quantityType.toLowerCase() === "kg") {
    return `${numberTo2DigitDecimal(price / quantity)}/kg`;
  }
  if (quantityType.toLowerCase() === "pcs") {
    return `${numberTo2DigitDecimal(price / quantity)}/pc`;
  }
}
