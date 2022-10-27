import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Typography from "@material-ui/core/Typography";

const Routing = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route exact="" path="/" component={MainHome} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
