import React from "react";
import { makeStyles } from "@material-ui/core";

const CenterContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <div className={classes.content}> {children}</div> */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    margin: "0 auto",
  },
}));

export default CenterContainer;
