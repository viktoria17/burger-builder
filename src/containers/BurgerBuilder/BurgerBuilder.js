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

	addIngredientHandler = (type) => {
		const { ingredients, totalPrice } = this.state;
		const addedIngredientCount = ingredients[type] + 1;
		const addedIngredients = {
			...ingredients
		};

		addedIngredients[type] = addedIngredientCount;

		const oldPrice = totalPrice;
		const additionalIngredientPrice = INGREDIENT_PRICES[type];
		const totalBurgerPrice = oldPrice + additionalIngredientPrice;

		this.setState({
			ingredients: addedIngredients,
			totalPrice: totalBurgerPrice
		});
	};

	removeIngredientHandler = (type) => {
		const { ingredients, totalPrice } = this.state;

		if (ingredients[type] <= 0) {
			return;
		}

		const removedIngredientCount = ingredients[type] - 1;
		const addedIngredients = {
			...ingredients
		};

		addedIngredients[type] = removedIngredientCount;

		const oldPrice = totalPrice;
		const removedIngredientPrice = INGREDIENT_PRICES[type];
		const totalBurgerPrice = oldPrice - removedIngredientPrice;

		this.setState({
			ingredients: addedIngredients,
			totalPrice: totalBurgerPrice
		});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disableButton={disabledInfo}
					burgerPrice={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
