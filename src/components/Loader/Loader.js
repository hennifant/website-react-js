import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
//import Hennifant from "../../assets/images/Hennifant";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div>
      <LoaderContainer>{/*<Hennifant width={250} /> */}</LoaderContainer>
    </motion.div>
  );
};

export default Loader;
