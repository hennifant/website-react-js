import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Social from "./components/Social";

const Routing = () => {
  return (
    <>
      <NavigationBar />
      <Social />
      <Routes>
        <Route path="/" component={MainHome} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
