import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
// import { makeStyles } from "@material-ui/core";

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
  hidden: { opacity: 0, x: -10 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
    <SectionContainer full>
      <motion.div variants={container} initial="hidden" animate="visible">
        <Typography
          component={motion.p}
          variants={typo}
          color="primary"
          variant="h5"
          style={{ marginBottom: "6px" }}
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
        <Typography variant="h3" color="initial">
          I make websites and mobile Apps.
        </Typography>
        <Typography variant="body1" color="initial">
          Frontend web developer{" "}
        </Typography>
        <Typography variant="body1" color="initial">
          based in Wolfsburg, Germany{" "}
        </Typography>
        <Button
          component={motion.p}
          variants={typo}
          variant="outlined"
          color="primary"
          size="large"
        >
          {" "}
          Get in touch
        </Button>
      </motion.div>
    </SectionContainer>
  );
};
//const useStyles = makeStyles((theme) => ({
//  typo: {
//    marginBottom: theme.spacing(2),
//  },
// }));

export default Home;
