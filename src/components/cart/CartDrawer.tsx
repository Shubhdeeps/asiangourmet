import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Cart from "../header/Cart";
import { cartProducts } from "../../store";
import CartItem from "./CartItem";
import Typography from "@mui/material/Typography";
import CartTotal from "./CartTotal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerBleeding = 36;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  innerWidth: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Root = styled("div")(() => ({
  height: "100%",
}));

export default function SwipeableEdgeDrawer(props: Props) {
  const { window, innerWidth, open, setOpen } = props;
  const cartCount = cartProducts.value.length;
  const [cartItemsCount, setCartItemCount] = React.useState(cartCount);
  const navigate = useNavigate();
  useEffect(() => {
    setCartItemCount(cartCount);
  }, [cartCount]);

  let windowWidth = 40;

  if (innerWidth < 1200) {
    windowWidth = 60;
  }
  if (innerWidth < 800) {
    windowWidth = 70;
  }
  if (innerWidth < 600) {
    windowWidth = 98;
  }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const details = navigator.userAgent;
  const regexp = /android|iphone|kindle|ipad/i;
  const isMobileDevice = regexp.test(details);

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            width: `calc(${windowWidth}% - ${drawerBleeding + 30}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="right" // Set the anchor to "right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={isMobileDevice ? drawerBleeding : 1}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            visibility: "visible",
          }}
        >
          {open && !!cartItemsCount && (
            <>
              <Box
                onClick={() => {
                  console.log("clickeddd inner");
                  setOpen(false);
                }}
                sx={{
                  width: 62,
                  height: 50,
                  // background: "#FFFFFF",
                  borderRadius: "20px 0px 0px 20px",
                  position: "absolute",
                  top: {
                    xs: "3px",
                    sm: "6.5px",
                    md: "10px",
                  },
                  right: {
                    xs: 4.5,
                    sm: 12.5,
                  },
                  zIndex: 1,
                }}
              >
                <Cart setOpen={() => setOpen(false)} />
              </Box>
            </>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "stretch",
            mt: 5,
            pt: 1.5,
            overflowY: "auto",
            position: "relative",
            pb: 1.5,
            background: "#ECECEC",
          }}
        >
          <CartTotal />
          {cartProducts.value.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <CartItem product={product} />
              </React.Fragment>
            );
          })}
          {!cartItemsCount && (
            <Typography sx={{ textAlign: "center" }}>Empty cart</Typography>
          )}
        </Box>
        <Button
          onClick={() => {
            setOpen(false);
            navigate("/checkout");
          }}
          disabled={!cartItemsCount}
          sx={{
            borderRadius: 0,
            position: "relative",
            width: "auto",
            display: "block",
            bottom: 0,
            py: 1.5,
            mt: "auto",
          }}
          variant="contained"
          color="success"
        >
          Checkout
        </Button>
      </SwipeableDrawer>
    </Root>
  );
}
