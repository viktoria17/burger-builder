import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const getOrderSummary = (ingredients) =>
	Object.keys(ingredients).map((ingredient) => (
		<li key={ingredient}>
			<span className={classes.OrderSummaryIngredient}>{ingredient}: </span>
			{ingredients[ingredient]}
		</li>
	));

const orderSummary = ({ ingredients, orderCancelled, orderContinued, price }) => (
	<Aux>
		<h3>Your Order:</h3>
		<p>A delicious burger with the following ingredients:</p>
		<ul>{getOrderSummary(ingredients)}</ul>
		<p>
			<strong>Total Price: {price.toFixed(2)}</strong>
		</p>
		<p>Continue to Checkout?</p>
		<Button btnType="Danger" clicked={orderCancelled}>
			CANCEL
		</Button>
		<Button btnType="Success" clicked={orderContinued}>
			CONTINUE
		</Button>
	</Aux>
);

export default orderSummary;
