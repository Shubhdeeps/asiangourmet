import { createTheme } from "@mui/material/styles";

const theme2 = createTheme({
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
      primary: "#F1F1F1",
      secondary: "#BEBEBE",
      disabled: "#B1B1B1",
    },
    background: {
      default: "#0C0038",
      paper: "#170024",
    },
  },
});

const theme = createTheme({
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
    background: {
      default: "#F7F7F7",
      paper: "#ECECEC",
    },
  },
});

export { theme, theme2 };
