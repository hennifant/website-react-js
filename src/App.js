import { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Router from "./Router";
import Loader from "./components/Loader";
import theme from "./assets/theme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        {isLoading ? <Loader /> : <Router />}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
