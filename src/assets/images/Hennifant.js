import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const Hennifant = (props) => {
  const classes = useStyles();
  return (
    <motion.h1>
      <div className={classes.container}>Hennifant</div>
    </motion.h1>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
  },
}));

export default Hennifant;
