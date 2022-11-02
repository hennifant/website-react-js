import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Home from "../../sections/Home";
import About from "../../sections/About";
import Experience from "../../sections/Experience";
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact";
import Background from "../../components/Background/Background.js";

const MainHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {!isMobile && <Background />}
    </motion.main>
  );
};

export default MainHome;
