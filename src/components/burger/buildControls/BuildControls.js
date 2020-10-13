import React from "react";
import BuildControl from "./buildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price ${props.burgerPrice.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addedIngredient(ctrl.type)}
        remove={() => props.removeIngredients(ctrl.type)}
        disabled={props.disable[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.disableOrderButton}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
