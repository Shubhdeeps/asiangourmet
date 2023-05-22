import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
  palette: {
    primary: {
      main: "#D21C27",
      dark: "#970F18",
      light: "#D83540",
    },
    secondary: {
      main: "#30C4D9",
      dark: "#238491",
      light: "#CDECF0",
    },
    text: {
      primary: "#424242",
      secondary: "#888686",
      disabled: "#707070",
    },
  },
});
