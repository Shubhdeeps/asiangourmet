import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0B1C1D",
    padding: theme.spacing(6),
    marginTop: theme.spacing(6),
    color: "#ffffff",
  },
  link: {
    marginRight: theme.spacing(4),
    color: "#ffffff",
  },
  footerText: {
    color: "#B7B7B7",
  },
}));

function Footer() {
  const classes = useStyles();

  const handleClick = (link: string) => {
    window.open(link);
  };
  return (
    <Box
      sx={{
        background: "#0B1C1D",
        border: "1px solid #0B1C1D",
      }}
    >
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            className={classes.footerText}
          >
            We are a team of people giving our best efforts to bring fresh food
            to your plate
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              onClick={() =>
                handleClick(
                  "https://www.facebook.com/profile.php?id=100090085818233"
                )
              }
              color="info"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                handleClick(
                  "https://www.instagram.com/asiangourmetestonia/?igshid=MzRlODBiNWFlZA%3D%3D"
                )
              }
              color="info"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                handleClick(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=asiangourmetestonia@gmail.com&su=Asian%20Gourmet%20Customer&body=BODY"
                )
              }
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography variant="inherit"
            variant="body2"
            align="center"
            className={classes.footerText}
          >
            {"© "} {new Date().getFullYear()} {" All Rights Reserved."}
          </Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Footer;
