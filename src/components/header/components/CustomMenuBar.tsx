import { bubble as Menu } from "react-burger-menu";
import "./hamburger.css";
import { Box, Divider } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import svg from "./hamburgerIcon.svg";
import HeaderTabs from "./HeaderTabs";
export default function CustomMenuBar({
  mobileOpen,
  handleDrawerToggle,
}: {
  mobileOpen: boolean;
  handleDrawerToggle: (state: boolean) => void;
}) {
  const drawer = (
    <Box
      sx={{
        width: "280px",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 1,
        }}
      >
        <Box
          sx={{
            width: "160px",
            height: "70px",
          }}
        >
          <img width="100%" height="100%" src={logo} />
        </Box>
      </Box>
      <Divider />
      <HeaderTabs orientation="vertical" />
    </Box>
  );
  console.log("mobileOpen:", mobileOpen);

  return (
    <Box
      sx={{
        display: {
          md: "none",
        },
      }}
    >
      <Menu
        customBurgerIcon={<img src={svg} />}
        onClose={() => handleDrawerToggle(false)}
        onOpen={() => handleDrawerToggle(true)}
        isOpen={mobileOpen}
        pageWrapId={"root"}
        width={280}
      >
        {drawer}
      </Menu>
    </Box>
  );
}
