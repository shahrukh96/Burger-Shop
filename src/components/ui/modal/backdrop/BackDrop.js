import React from "react";
import classes from "./BackDrop.css";

const backDrop = (props) => {
  console.log(props.show);
  return props.show ? <div className={classes.BackDrop}></div> : null;
};

export default backDrop;
