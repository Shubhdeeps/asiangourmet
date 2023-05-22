import Header from "../components/header/Header";
import Box from "@mui/material/Box";
import bgPattern1 from "../assets/images/bgpattern1.png";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Header />
      <Box height="60px"></Box>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          top: "50%",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translate(0%, -50%)",
            display: "flex",
            zIndex: -1,
            width: {
              xs: "60%",
              md: "35%",
            },
          }}
        >
          <img className="noselect" src={bgPattern1} width={"100%"} />
        </Box>
      </Box>
      {/* All the child component of createBrowser routes will get this layout */}

      <Outlet />
    </>
  );
}
