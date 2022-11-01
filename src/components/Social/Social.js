import React from "react";
import { Link, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { LinkedIn, Instagram, GitHub, Email } from "@material-ui/icons";
import IconButton from "../IconButton";

const Social = ({ mobile }) => {
  const classes = useStyles();
  if (mobile) {
    return (
      <div className={classes.mobileWrapper}>
        <IconButton icon={GitHub} m={1} href="https://github.com/hennifant" />
        <IconButton
          icon={Instagram}
          m={1}
          href="https://www.instagram.com/hennifantus/"
        />

        <IconButton icon={LinkedIn} m={1} href="https://www.linkedin.com/" />
        <IconButton icon={Email} m={1} href="mailto:hennifantus@gmail.com" />
      </div>
    );
  } else {
    return (
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 3 }}
        className={classes.wrapper}
      >
        <IconButton icon={GitHub} m={1} href="https://github.com/hennifant" />
        <IconButton
          icon={Instagram}
          m={1}
          href="https://www.instagram.com/hennifantus/"
        />

        <IconButton icon={LinkedIn} m={1} href="https://www.linkedin.com/" />
        <IconButton icon={Email} m={1} href="mailto:hennifantus@gmail.com" />
      </motion.div>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    zIndex: 100,
  },
  mobileWrapper: {
    display: "flex",
  },
}));

export default Social;
