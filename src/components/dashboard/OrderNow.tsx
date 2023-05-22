import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import animationData from "../../assets/animationData/delivery.json";
import Heading from "./components/Heading";
import veggiebag from "../../assets/images/veggiebag.png";

export default function OrderNow() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: {
            sm: "600px",
            xs: "300px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <Heading title="Order Now" />
        <Box
          sx={{
            width: {
              lg: "40%",
              md: "50%",
              xs: "90%",
            },
            position: "relative",
            zIndex: 1,
            mb: {
              lg: "-160px",
              md: "-130px",
              sm: "-160px",
              xs: "-100px",
            },
          }}
        >
          <Lottie options={defaultOptions} width="100%" />
        </Box>
        <Box
          sx={{
            background: "#EFB940",
            width: "100%",
            height: {
              md: "550px",
              sm: "450px",
              xs: "80vw",
            },
            borderRadius: "50% 50% 0px 0px",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <Box width="600px" mb="-5px">
            <img src={veggiebag} width="100%" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
