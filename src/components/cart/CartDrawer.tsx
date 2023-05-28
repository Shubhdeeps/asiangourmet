import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Cart from "../header/Cart";
import { cartProducts } from "../../store";
import { Divider } from "@material-ui/core";
import CartItem from "./CartItem";
import Typography from "@mui/material/Typography";
import CartTotal from "./CartTotal";

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
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            // border: "1px solid red",
            top: 0,
            bottom: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            visibility: "visible",
          }}
        >
          {isMobileDevice && !!cartItemsCount && (
            <>
              <Box
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
                <Cart setOpen={() => setOpen(true)} />
              </Box>
            </>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "stretch",
            mt: 0,
            overflowY: "auto",
            position: "relative",
          }}
        >
          <CartTotal />
          {cartProducts.value.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <CartItem product={product} />
                <Divider variant="middle" />
              </React.Fragment>
            );
          })}
          {!cartItemsCount && (
            <Typography sx={{ textAlign: "center" }}>Empty cart</Typography>
          )}
        </Box>
      </SwipeableDrawer>
    </Root>
  );
}
