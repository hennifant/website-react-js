import React from "react";
import { Link, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { LinkedIn, Instagram, GitHub, Email } from "@material-ui/icons";
import IconBtn from "../IconBtn";

const Social = () => {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 3 }}
      className={classes.wrapper}
    >
      <IconBtn icon={GitHub} m={1} href="https://github.com/hennifant" />
      <IconBtn
        icon={Instagram}
        m={1}
        href="https://www.instagram.com/hennifantus/"
      />

      <IconBtn icon={LinkedIn} m={1} href="https://www.linkedin.com/" />
      <IconBtn icon={Email} m={1} href="mailto:hennifantus@gmail.com" />
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
  },
}));

export default Social;
