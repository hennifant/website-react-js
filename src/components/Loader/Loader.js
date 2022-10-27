import React from "react";
import CenterContainer from "../../containers/CenterContainer";
// import Hennifant from "../../assets/images/Hennifant";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div>
      <CenterContainer></CenterContainer>
    </motion.div>
  );
};

export default Loader;
