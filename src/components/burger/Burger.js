import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./burgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingKey) => {
      return [...Array(props.ingredients[ingKey])].map((i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length === 0 ? (
        <p>Please start adding ingredients!</p>
      ) : (
        transformedIngredients
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
