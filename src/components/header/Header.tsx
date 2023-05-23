import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import CustomDrawer from "./Drawer";
import { HideOnScroll } from "./HideHeader";
import HeaderTabs from "./HeaderTabs";
import Cart from "./Cart";
import CartDrawer from "../cart/CartDrawer";
import logo from "../../assets/images/logo.png";
function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [showCart, setShowCart] = useState(false);

  const details = navigator.userAgent;
  const regexp = /android|iphone|kindle|ipad/i;
  const isMobileDevice = regexp.test(details);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const innerWidth = window.innerWidth;

  return (
    <>
      <CartDrawer
        innerWidth={innerWidth}
        open={showCart}
        setOpen={setShowCart}
      />
      <HideOnScroll>
        <AppBar
          sx={{
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "none",
            backdropFilter: "blur(5px)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ gap: "20px" }}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  mobileOpen={Boolean(anchorElNav)}
                  handleDrawerToggle={handleCloseNavMenu}
                />
              </Box>
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
              <Tooltip title="Profile">
                <Avatar>H</Avatar>
              </Tooltip>
              {!isMobileDevice && <Cart setOpen={() => setShowCart(true)} />}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
export default Header;
