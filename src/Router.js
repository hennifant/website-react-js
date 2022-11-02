import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
const MainHome = lazy(() => import("./pages/MainHome"));
const NavigationBar = lazy(() => import("./components/NavigationBar"));
const Social = lazy(() => import("./components/Social"));
const Footer = lazy(() => import("./components/Footer"));
const Loader = lazy(() => import("./components/Loader"));

const Router = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Loader />
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
