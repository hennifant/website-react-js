import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Social from "./components/Social";

const Router = () => {
  return (
    <>
      <NavigationBar />
      <Social />
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
