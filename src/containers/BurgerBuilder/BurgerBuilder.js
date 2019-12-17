import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchasable: false,
		ordering: false,
		loading: false,
		showError: false
	};

	componentDidMount() {
		axios.get('https://burger-builder-5de73.firebaseio.com/ingredients.json')
			.then(res => {
				this.setState({
					ingredients: res.data
				});
			})
			.catch(err => {
				this.setState({
					showError: true
				})
			});
	};

	updateOrderingState = () => {
		this.setState({
			ordering: true
		});
	};

	cancelOrderingState = () => {
		this.setState({
			ordering: false
		});
	};

	continueOrderHandler = () => {
		const queryParams = [];

		for (let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}

		queryParams.push('price=' + this.state.totalPrice);

		const queryString = queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	};

	updatePurchaseState = (ingredients) => {
		const isPurchasable = Object.values(ingredients).some((value) => value > 0);

		this.setState({
			purchasable: isPurchasable
		});
	};

	addIngredientHandler = (type) => {
		const {ingredients, totalPrice} = this.state;
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

		this.updatePurchaseState(addedIngredients);
	};

	removeIngredientHandler = (type) => {
		const {ingredients, totalPrice} = this.state;

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

		this.updatePurchaseState(addedIngredients);
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};

		for (const ingredient in disabledInfo) {
			disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
		}

		let orderSummary = null;
		let burger = this.state.showError ? 'Ingredients cant be loaded!' : <Spinner/>;

		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disableButton={disabledInfo}
						burgerPrice={this.state.totalPrice}
						isPurchasable={this.state.purchasable}
						isOrdering={this.updateOrderingState}
					/>
				</Aux>
			);

			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					orderCancelled={this.cancelOrderingState}
					orderContinued={this.continueOrderHandler}
					price={this.state.totalPrice}
				/>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner/>;
		}

		return (
			<Aux>
				<Modal show={this.state.ordering} modalClosed={this.cancelOrderingState}>
					{ orderSummary }
				</Modal>
				{ burger }
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
