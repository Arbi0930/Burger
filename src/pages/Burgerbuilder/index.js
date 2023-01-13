import React, { Component }  from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
class BurgerBuilder extends Component{
    state = {
        ingredient: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        }
    }
    ortsNemeh = (type) => {
        console.log(type);
        const newIngredients = {...this.state.ingredient};
        newIngredients[type]++;
        this.setState();
    }
    render(){
        return(
            <div>
                <Burger ingredients = {this.state.ingredient}/>
                <BuildControls ortsNemeh={this.ortsNemeh}/>
            </div>
        )
    }
}

export default BurgerBuilder;