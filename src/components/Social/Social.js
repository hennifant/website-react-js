import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { LinkedIn, Instagram, GitHub, Email } from "@material-ui/icons";
import IconButton from "../IconButton";
import DarkModeSwitcher from "../DarkModeSwitcher";
import loaderContext from "../../contexts/loaderContext";

const Social = ({ mobile }) => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.8 + i * 0.1,
        },
      }));
    } else {
      controls.start({ opacity: 0, y: 0 });
    }
  }, [isLoading, controls]);

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
      <motion.div className={classes.wrapper}>
        <motion.div
          animate={controls}
          custom={0}
          className={classes.socialIcon}
        >
          <IconButton icon={GitHub} m={1} href="https://github.com/hennifant" />
        </motion.div>
        <motion.div
          animate={controls}
          custom={1}
          className={classes.socialIcon}
        >
          <IconButton
            icon={Instagram}
            m={1}
            href="https://www.instagram.com/hennifantus/"
          />
        </motion.div>
        <motion.div
          animate={controls}
          custom={2}
          className={classes.socialIcon}
        >
          <IconButton icon={LinkedIn} m={1} href="https://www.linkedin.com/" />
        </motion.div>
        <motion.div
          animate={controls}
          custom={3}
          className={classes.socialIcon}
        >
          <IconButton icon={Email} m={1} href="mailto:hennifantus@gmail.com" />
        </motion.div>
        <motion.div
          animate={controls}
          custom={4}
          className={classes.socialIcon}
        >
          <DarkModeSwitcher />
        </motion.div>
      </motion.div>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  socialIcon: {
    marginBottom: "5px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
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
