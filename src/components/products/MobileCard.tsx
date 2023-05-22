import Box from "@mui/material/Box";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import noimage from "../../assets/images/noimage.jpg";
import { Product } from "../../models/Product.model";
import { cartProducts } from "../../store";
import { useEffect, useState } from "react";
import MobileAddToCartButton from "./components/MobileAddToCartButton";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 15,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "#FAFCFE",
  },
}));

export default function MobileCard({ props }: { props: Product }) {
  const { name, imageURL, price, quantity, quantityType, id } = props;
  const currProduct = cartProducts.value.find((item) => item.id === id);

  const [itemCount, setItemCount] = useState(
    currProduct ? currProduct.count : 0
  );
  useEffect(() => {
    setItemCount(currProduct ? currProduct.count : 0);
  }, [currProduct]);
  return (
    <StyledBadge badgeContent={itemCount} color="success">
      <Box
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
            {price / quantity}/{quantity}
            {quantityType}
          </Typography>

          <Typography
            color="secondary.main"
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              mt: "auto",
            }}
          >
            €{price}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              background: "#30C4D9",
              borderRadius: "15px 0px 0px 0px",
            }}
          >
            <MobileAddToCartButton product={props} initCount={itemCount} />
          </Box>
        </Box>
      </Box>
    </StyledBadge>
  );
}
