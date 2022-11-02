import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./assets/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Router from "./Router";
import ScrollToTop from "./components/ScrollToTop";
import ThemeContext from "./contexts/themeContext";
import LoaderContext from "./contexts/loaderContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <CssBaseline />
              <ScrollToTop />
              <Router />
            </ThemeProvider>
          </LoaderContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
