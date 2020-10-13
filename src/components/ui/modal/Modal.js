import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import BackDrop from "./backdrop/BackDrop";

const modal = (props) => (
  <Aux>
    <BackDrop show={props.show} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);
export default modal;
