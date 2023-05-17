import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import CustomDrawer from "./Drawer";
import { HideOnScroll } from "./HideHeader";
import HeaderTabs from "./HeaderTabs";
import Cart from "./Cart";
const pages = ["Home", "Products", "About us", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Joti One",
                  fontWeight: 700,
                  fontSize: "32px",
                  letterSpacing: ".1rem",
                  color: "secondary.main",
                  textDecoration: "none",
                }}
              >
                Asian Gourmet
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="secondary"
                >
                  <MenuIcon />
                </IconButton>
                <CustomDrawer
                  pages={pages}
                  mobileOpen={Boolean(anchorElNav)}
                  handleDrawerToggle={handleCloseNavMenu}
                />
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Joti One",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "secondary.main",
                  textDecoration: "none",
                }}
              >
                Asian Gourmet
              </Typography>

              <HeaderTabs />

              <Cart />
              <Tooltip title="Profile">
                <Avatar>H</Avatar>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
export default Header;
