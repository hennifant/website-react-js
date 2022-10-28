import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import { Grid, Typography, Divider } from "@material-ui/core";
import Avatar from "../../components/Avatar";
// import Divider from "../../components/Divider";

const About = () => {
  // const classes=useStyles()
  return (
    <SectionContainer title="About">
      <Divider />
      <Grid container alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque elit eget gravida cum sociis. Mauris a diam maecenas
            sed enim ut sem viverra. Donec massa sapien faucibus et molestie ac.
            Viverra vitae congue eu consequat ac.
          </Typography>
          <Skills />
        </Grid>
        <Grid item xs={12} md={5} style={{ flexBasis: "auto" }}>
          <Avatar />
        </Grid>
      </Grid>
      <Typography variant="body1" color="initial"></Typography>
    </SectionContainer>
  );
};

// const useStyles = makeStyles(theme=>({
//   container: {
//     border: "1px solid white"
//   }
// }))

export default About;
