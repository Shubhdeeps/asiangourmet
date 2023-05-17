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
          pb: "300px",
          pt: "300px",
        }}
      >
        <DashWrapperUp>
          <SectionTwo />
        </DashWrapperUp>
      </Box>
      <HotSelling />
      <Box
        sx={{
          height: "100%",
          pb: "200px",
          pt: "200px",
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
          pt: "200px",
          pb: "200px",
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
        {waveUp}
      </Box>
      <Box
        sx={{
          background: "#f4f4f4",
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
