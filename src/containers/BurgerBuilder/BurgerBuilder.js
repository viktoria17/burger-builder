import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	};

	addIngredientHandler = type => {
		const { ingredients, totalPrice } = this.state;

		const addedIngredientCount = ingredients[type] + 1;
		const addedIngredients = {
			...ingredients
		};

		addedIngredients[type] = addedIngredientCount;

		const oldPrice = totalPrice;
		const additionalIngredientPrice = INGREDIENT_PRICES[type];
		const priceWithAdditionalIngredient = oldPrice + additionalIngredientPrice;

		this.setState({
			ingredients: addedIngredients,
			totalPrice: priceWithAdditionalIngredient
		});
	};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls ingredientAdded={this.addIngredientHandler} />
			</Aux>
		);
	}
}

export default BurgerBuilder;
