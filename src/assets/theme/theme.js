import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1320,
      xl: 1920,
    },
  },
  navbarHeight: "70px",
  mobileNavbarHeight: "55px",
  typography,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontSize: "16px",
      },
      text: {
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": {
          color: "#1A1A1A",
          backgroundColor: "inherit",
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#1A2238",
    },
    primary: {
      main: "#FF4C29",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#fff",
  ...baseTheme,
});

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#A0AECD",
    },
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      contrastText: "#E6E6E6",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
    action: {
      disabled: "#464646",
      disabledBackground: "#969696",
    },
  },
  backgroundSecondary: {
    bg: "#6F4C5B",
    text: "#E6E6E6",
  },
  logoColor: "#6F4C5B",
  ...baseTheme,
});

export { darkTheme, lightTheme };
