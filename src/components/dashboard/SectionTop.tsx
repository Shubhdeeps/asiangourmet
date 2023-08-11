import dash1 from "../../assets/images/dash1.png";
import dashlabel from "../../assets/images/dashlabel.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
export default function SectionTop() {
  const navigate = useNavigate();
  const handleProductMenu = () => navigate("/products/hot");
  return (
    <Stack
      direction={{
        xs: "column-reverse",
        lg: "row",
      }}
      justifyContent={{
        md: "space-between",
      }}
      alignItems="center"
      sx={{
        border: "1px solid red",
      }}
      // justifyContent="space-between"
      // sx={{
      //   display: "flex",
      //   alignItems: "center",
      //   flexDirection: {
      //     xs: "column-reverse",
      //     md: "row",
      //   },
      // }}
    >
      <Box
        sx={{
          border: "1px solid black",
          width: { sm: "100%", md: "40%" },
          minWidth: {
            md: "500px",
            lg: "700px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "start",
          },
          gap: "30px",
        }}
      >
        <Box
          width="40%"
          sx={{
            display: {
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <img src={dashlabel} width="100%" />
        </Box>
        <Typography
          sx={{
            fontSize: { sm: "32px", md: "56px", xs: "22px" },
            fontWeight: 700,
            lineHeight: { md: "50px", sm: "35px" },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "start",
            },
          }}
        >
          Fresh goods from Asia Delivered Direct To Your Door
        </Typography>
        <Box
          sx={{
            padding: {
              xs: 2,
              md: 0,
            },
            borderRadius: "15px",
            display: {
              xs: "flex",
              md: "unset",
            },
            alignItems: "center",
            justifyContent: "center",
            background: { xs: "rgba(247, 247, 247, 0.9)", md: "none" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "18px", sm: "12px" },
              fontWeight: 400,
              width: "80%",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "start",
              },
            }}
          >
            Experience the diversity of Asian cuisine. Our selection of products
            from all over the continent is sure to inspire your next meal.
          </Typography>
        </Box>
        <Button
          onClick={handleProductMenu}
          variant="contained"
          color="secondary"
          sx={{
            px: "50px",
            borderRadius: "30px",
            py: "10px",
            color: "white",
          }}
        >
          EXPLORE NOW
        </Button>
      </Box>
      <Box
        sx={{
          border: "1px solid red",
          width: {
            xs: "110%",
            sm: "60%",
            md: "50%",
          },
          maxWidth: "800px",
          mt: {
            md: 0,
            xs: -8,
          },
        }}
      >
        <img src={dash1} width="100%" />
      </Box>
    </Stack>
  );
}
