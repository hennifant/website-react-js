import { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./assets/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import themeContext from "./contexts/themeContext";
import "./App.css";
import Router from "./Router";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, []);
  return (
    <BrowserRouter>
      <themeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <ScrollToTop />
          {isLoading ? <Loader /> : <Router />}
        </ThemeProvider>
      </themeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
