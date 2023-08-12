import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { HideOnScroll } from "./components/HideHeader";
import HeaderTabs from "./components/HeaderTabs";
import Cart from "./Cart";
import CartDrawer from "../cart/CartDrawer";
import logo from "../../assets/images/logo.png";
import { cartProducts } from "../../store";
import Slide from "@mui/material/Slide";
import CustomMenuBar from "./components/CustomMenuBar";
function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItemsCount = cartProducts.value.length;

  const handleCloseNavMenu = (state: boolean) => {
    console.log("closing");

    setOpenDrawer(state);
  };
  const innerWidth = window.innerWidth;

  const cartVisibility = !!cartItemsCount && !showCart;
  return (
    <>
      <CustomMenuBar
        mobileOpen={Boolean(openDrawer)}
        handleDrawerToggle={handleCloseNavMenu}
      />
      <CartDrawer
        innerWidth={innerWidth}
        open={showCart}
        setOpen={setShowCart}
      />
      <Slide direction="left" in={cartVisibility} mountOnEnter unmountOnExit>
        <Box
          onClick={() => setShowCart(true)}
          sx={{
            width: "40px",
            height: "50px",
            position: "fixed",
            right: 25,
            top: {
              md: 8,
              xs: 3,
            },
            zIndex: 5,
          }}
        >
          <Cart setOpen={() => setShowCart(true)} />
        </Box>
      </Slide>
      {/* Not visible for display xs,sm */}
      <HideOnScroll>
        <AppBar
          sx={{
            zIndex: 3,
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            backdropFilter: "blur(5px)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ gap: "20px" }}>
              {/* deprecate the previous mobile hamburger */}
              {/* <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <CustomDrawer
                  mobileOpen={Boolean(openDrawer)}
                  handleDrawerToggle={handleCloseNavMenu}
                />
              </Box> */}
              <Box
                sx={{
                  width: "160px",
                  height: "70px",
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <img width="100%" height="100%" src={logo} />
              </Box>
              <HeaderTabs />
              <Box
                sx={{
                  width: "10px",
                  height: "50px",
                }}
              ></Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
export default Header;
