import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Background = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <iframe
        title="background-3d"
        src=""
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
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
}));

export default Background;
