import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import IconButton from "@mui/material/IconButton";
import location from "../../assets/images/location.png";
export default function Location() {
  const handleNavigate = () =>
    window.open(
      "https://www.google.com/maps/place/Asian+Gourmet/@59.4411184,24.7336125,17z/data=!3m1!4b1!4m6!3m5!1s0x4692936b06ac9b51:0x2a8ea38c09e912c7!8m2!3d59.4411157!4d24.7361874!16s%2Fg%2F11tg8ps4cv"
    );
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        justifyContent: {
          md: "space-between",
          xs: "center",
        },
        gap: {
          xs: "50px",
          md: "0px",
        },
        height: {
          md: "800px",
          xs: "600px",
        },
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="30px"
        sx={{
          flexGrow: {
            md: 1,
          },
          alignItems: {
            md: "start",
            xs: "center",
          },
          width: {
            md: "40%",
            xs: "90%",
          },
        }}
      >
        <Typography
          variant="inherit"
          sx={{
            fontSize: { md: "44px", xs: "28px", lg: "50px" },
            fontWeight: 700,
            lineHeight: { md: "40px", xs: "32px" },
            textAlign: {
              xs: "center",
              md: "start",
            },
          }}
        >
          We are located in the center of Balti Jaam Market
        </Typography>
        <IconButton
          onClick={handleNavigate}
          sx={{
            px: "50px",
            borderRadius: "30px",
            py: { lg: "10px", md: "6px" },
            backgroundColor: "secondary.main",
          }}
        >
          <NavigationIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: {
            md: "40%",
            xs: "80%",
            sm: "65%",
          },
        }}
      >
        <img onClick={handleNavigate} src={location} width="100%" />
      </Box>
    </Box>
  );
}
