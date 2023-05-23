import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import cover from "../../assets/images/cover.jpg";
import Footer from "../../components/dashboard/Footer";
export default function AboutUs() {
  return (
    <>
      <Box
        sx={{
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          position: "relative",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: {
              md: "70vw",
              sm: "86vw",
              xs: "96vw",
            },
            borderRadius: "15px",
          }}
        >
          <img className="border-10" width="100%" height="100%" src={cover} />
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            width: {
              md: "70vw",
              sm: "86vw",
              xs: "96vw",
            },
            mb: 5,
            background: "rgba(247, 247, 247, 0.9)",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "28px", sm: "16px" },
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            Welcome to Asian Gourmet, your ultimate destination for all things
            Asian cuisine. We take pride in offering a wide range of
            high-quality products and ingredients that will elevate your
            culinary experience and bring the authentic flavors of Asia to your
            home.
            <br />
            <br />
            At Asian Gourmet, we understand the importance of sourcing genuine
            and traditional products that capture the essence of Asian cuisine.
            Our team consists of passionate individuals who share a deep love
            for the rich culinary heritage of Asia. We tirelessly search for the
            finest ingredients, delicacies, and kitchen essentials from various
            Asian countries, ensuring that our customers have access to an
            extensive selection of authentic and premium products.
            <br />
            <br />
            Our diverse inventory spans across the vast and vibrant regions of
            Asia, including China, Japan, Thailand, India, Korea, Vietnam, and
            more. From fragrant spices and seasonings to fresh produce, noodles,
            rice, sauces, and condiments,
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
