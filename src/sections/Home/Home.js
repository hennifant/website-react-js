import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
// import { makeStyles } from "@material-ui/core";

const Home = () => {
  return (
    <SectionContainer>
      <Typography
        component={motion.p}
        ini
        color="primary"
        variant="h5"
        style={{ marginBottom: "6px" }}
      />
      <Typography color="primary" variant="h5" style={{ marginBottom: "6px" }}>
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
      <Button variant="outlined" color="primary">
        {" "}
        Get in touch
      </Button>
    </SectionContainer>
  );
};
//const useStyles = makeStyles((theme) => ({
//  typo: {
//    marginBottom: theme.spacing(2),
//  },
// }));

export default Home;
