import React from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import MainHome from "./pages/MainHome";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Social from "./components/Social";

const Router = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <NavigationBar />
      {!isMobile && <Social />}
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
