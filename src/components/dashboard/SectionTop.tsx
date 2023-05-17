import dash1 from "../../assets/images/dash1.png";
import dashlabel from "../../assets/images/dashlabel.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SectionTop() {
  const navigate = useNavigate();
  const handleProductMenu = () => navigate("/products");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "40%" },
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "center",
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
          width: {
            xs: "80%",
            sm: "80%",
            md: "60%",
          },
        }}
      >
        <img src={dash1} width="100%" />
      </Box>
    </Box>
  );
}
