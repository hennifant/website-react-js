import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
// import AvatarImg from "../../assets/images/hennifant.jpg";

const Avatar = () => {
  const classes = useStyles();
  return (
    <Paper>
      <img src alt="Hennifant" className={classes.avatarImg} />{" "}
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    width: "300px",
    borderRadius: "50%",
  },
}));

export default Avatar;
