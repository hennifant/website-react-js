import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <SectionContainer>
      <Typography variant="body1" color="initial">
        Hi there 👋, i'm
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

export default Home;
