import React from "react";
import { makeStyles } from "@material-ui/core";
// import AvatarImg from "../../assets/images/hennifant.jpg";

const Avatar = () => {
  const classes = useStyles();
  return <img src alt="Hennifant" className={classes.avatarImg} />;
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    width: "270px",
    borderRadius: "50%",
    height: "270px",
    objectFit: "cover",
    boxShadow: theme.shadows[7],
  },
}));

export default Avatar;
