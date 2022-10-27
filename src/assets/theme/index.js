import { createTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette: {
    background: {
      default: "#1A1A1A",
      paper: colors.common.white,
    },
    primary: {
      main: "#FF4C29",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2C394B",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(220,220,220)",
    },
  },
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
          color: "rgb(230,230,230)",
          backgroundColor: "inherit",
        },
      },
    },
  },
});

export default theme;
