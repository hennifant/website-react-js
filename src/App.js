import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import Routing from "./Routing";
import Loader from "./components/Loader";
import theme from "./assets/theme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        {isLoading ? <Loader /> : <Routing />}
      </ThemeProvider>
    </Router>
  );
}

export default App;
