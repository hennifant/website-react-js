import React from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.5,
    },
  },
};

const typo = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const AnimatedLink = (props) => (
  <motion.div variants={props.variants}>
    <Link {...props} />
  </motion.div>
);

const Home = () => {
  const classes = useStyles();
  return (
    <HomeContainer id="home">
      <motion.div variants={container} initial="hidden" animate="visible">
        <Typography
          component={motion.p}
          variants={typo}
          color="primary"
          variant="h5"
          style={{ marginBottom: "0px" }}
        />
        <Typography
          color="primary"
          variant="h5"
          style={{ marginBottom: "6px" }}
        >
          Hi there
          <motion.div
            style={{ display: "inline-block" }}
            animate={{ rotate: [50, 90, 50] }}
            transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
          >
            👋
          </motion.div>
          , i'm
        </Typography>
        <Typography variant="h2" color="initial">
          Hennifant
        </Typography>
        <Typography
          component={motion.p}
          variants={typo}
          variant="h2"
          color="secondary"
          className={classes.subTitle}
        >
          I make websites and mobile Apps.
        </Typography>
        <Typography
          component={motion.p}
          variants={typo}
          variant="body2"
          color="initial"
          style={{ marginBottom: "0" }}
        >
          Frontend web developer.
        </Typography>
        <Typography
          component={motion.p}
          variants={typo}
          variant="body1"
          color="initial"
          style={{ marginBottom: "30px" }}
        >
          based in Wolfsburg, Germany
        </Typography>
        <Button
          component={AnimatedLink}
          to="contact"
          variants={typo}
          variant="outlined"
          color="primary"
          size="large"
        >
          Get in touch
        </Button>
      </motion.div>
    </HomeContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
}));

export default Home;
