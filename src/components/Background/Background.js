import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const Background = () => {
  const classes = useStyles();
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 3000);
  }, []);
  return (
    <>
      {delay && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{
            delay: 4.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={classes.wrapper}
        >
          <div className={classes.container}>
            <iframe
              title="background"
              src=""
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
            <div className={classes.hideLogo} />
          </div>
        </motion.div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
  },
  iframe: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: -1,
  },
  hideLogo: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100px",
    height: "100px",
    backgroundColor: theme.palette.background.default,
  },
}));

export default Background;
