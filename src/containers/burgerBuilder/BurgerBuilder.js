import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import Modal from "../../components/ui/modal/Modal";
import OrderSummary from "../../components/burger/ordersummary/OrderSummary";

const INGREDIENT_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.6,
  meat: 1.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasing: false,
  };

  pucrchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddintion = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddintion + oldPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    const orderButtonDisable = this.state.totalPrice > 4;
    console.log(orderButtonDisable);

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <BuildControls
          addedIngredient={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disable={disabledInfo}
          burgerPrice={this.state.totalPrice}
          disableOrderButton={orderButtonDisable}
          ordered={this.pucrchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
