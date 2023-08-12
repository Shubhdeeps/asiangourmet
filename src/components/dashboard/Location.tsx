import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import IconButton from "@mui/material/IconButton";
// import location from "../../assets/images/location.png";

// const API_KEY = "AIzaSyBZz-Jzo3MgiI777v8EExkW-q6onbo7I7g";
// const LOCATION =
//   "Asian+Gourmet/@59.4411157,24.7361874,15z/data=!4m14!1m7!3m6!1s0x4692936b06ac9b51:0x2a8ea38c09e912c7!2sAsian+Gourmet!8m2!3d59.4411157!4d24.7361874!16s%2Fg%2F11tg8ps4cv!3m5!1s0x4692936b06ac9b51:0x2a8ea38c09e912c7!8m2!3d59.4411157!4d24.7361874!16s%2Fg%2F11tg8ps4cv?entry=ttu";
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
            lineHeight: { md: "50px", xs: "36px" },
            textAlign: {
              xs: "center",
              md: "start",
            },
            maxWidth: "700px",
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
          border: "2px solid gray",
          borderRadius: "10px",
          borderBlock: "border-box",
          width: {
            md: "40%",
            xs: "80%",
            sm: "65%",
          },
          height: {
            xs: "260px",
            sm: "320px",
            md: "480px",
          },
        }}
      >
        <iframe
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: "10px",
            // filter: "invert(90%) hue-rotate(180deg) contrast(83%)",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8114.071374955068!2d24.7361874!3d59.4411157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692936b06ac9b51%3A0x2a8ea38c09e912c7!2sAsian%20Gourmet!5e0!3m2!1sen!2see!4v1691847760368!5m2!1sen!2see`}
        ></iframe>
        {/* <img onClick={handleNavigate} src={location} width="100%" /> */}
      </Box>
    </Box>
  );
}

{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8114.071374955068!2d24.7361874!3d59.4411157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692936b06ac9b51%3A0x2a8ea38c09e912c7!2sAsian%20Gourmet!5e0!3m2!1sen!2see!4v1691847760368!5m2!1sen!2see" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
