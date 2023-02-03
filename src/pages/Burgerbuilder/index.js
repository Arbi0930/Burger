import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/general/modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../utility/axios-order";

import Spinner from "../../components/general/Spinner";
const ingredient_prices = { salad: 150, bacon: 800, cheese: 250, meat: 1500 };
const ingredient_names = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  salad: "Салад",
  meat: "Үхрийн мах",
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 500,
    purchasing: false,
    confirmOrder: false,
    lastcustomername: "N/A",
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        const arr = Object.entries(response.data);
        arr.forEach((el) => {
          console.log(el[1].address.name + "===> " + el[1].dun);
        });

        const lastorder = arr[arr.length - 1][1];

        this.setState({
          ingredients: lastorder.orts,
          totalPrice: lastorder.dun,
          lastcustomername: lastorder.address.name,
        });
      })
      .catch(console.log(Error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  continueOrder = () => {
    const order = {
      orts: this.state.ingredients,
      dun: this.state.totalPrice,
      address: {
        name: "Tengis",
        city: "ub",
        street: "baynburd hulgaich tengis",
      },
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((respone) => {})
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = (type) => {
    console.log("===>" + type);
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + ingredient_prices[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
      purchasing: true,
    });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - ingredient_prices[type];
      this.setState({
        ingredients: newIngredients,
        totalPrice: newPrice,
        purchasing: newPrice > 500,
      });
    }
  };
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Modal show={this.state.confirmOrder} close={this.closeConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              orts={this.state.ingredients}
              name={ingredient_names}
              price={this.state.totalPrice}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}
        <p>Сүүлчийн захиалагч {this.state.lastcustomername}</p>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          show={this.showConfirmModal}
          disabledButton={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsHasah={this.ortsHasah}
          ortsNemeh={this.ortsNemeh}
          ingreientnames={ingredient_names}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
