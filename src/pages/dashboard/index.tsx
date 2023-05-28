import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SectionTop from "../../components/dashboard/SectionTop";
import SectionTwo from "../../components/dashboard/SectionTwo";
import TopCategories from "../../components/dashboard/TopCategories";

import OrderNow from "../../components/dashboard/OrderNow";
import Location from "../../components/dashboard/Location";
import Footer from "../../components/dashboard/Footer";
import DashWrapperUp from "../../components/wrappers/DashWrapperUp";
import { waveUp } from "../../assets/svg/waves";
import HotSelling from "../../components/dashboard/HotSelling";

export default function Dashboard() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <DashWrapperUp>
          <Container maxWidth="xl">
            <SectionTop />
          </Container>
        </DashWrapperUp>
      </Box>
      <Box
        sx={{
          height: "100%",
          pb: { md: "300px", xs: "100px" },
          pt: { md: "300px", xs: "100px" },
        }}
      >
        <DashWrapperUp>
          <SectionTwo />
        </DashWrapperUp>
      </Box>
      <HotSelling />
      <Box
        sx={{
          // height: "100%",
          pb: { md: "200px", xs: "0px" },
          pt: { md: "200px", xs: "0px" },
        }}
      >
        <DashWrapperUp>
          <Container maxWidth="xl">
            <TopCategories />
          </Container>
        </DashWrapperUp>
      </Box>
      <Box
        sx={{
          // height: "100%",
          pb: { md: "200px", xs: "0px" },
          pt: { md: "200px", xs: "0px" },
        }}
      >
        <DashWrapperUp>
          <Container maxWidth="xl">
            <Location />
          </Container>
        </DashWrapperUp>
      </Box>
      <Box
        sx={{
          background: "#f4f4f4",
        }}
        width="100%"
        mt="-10px"
      >
        {waveUp("#F7F7F7")}
      </Box>
      <Box
        sx={{
          background: "#f4f4f4",
          mt: { xs: "-140px", sm: "0px" },
        }}
      >
        <DashWrapperUp>
          <OrderNow />
        </DashWrapperUp>
      </Box>
      <Footer />
    </>
  );
}
