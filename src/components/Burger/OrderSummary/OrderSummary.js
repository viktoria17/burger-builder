import React from 'react';

import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';

const getOrderSummary = (ingredients) =>
	Object.keys(ingredients).map((ingredient) => (
		<li key={ingredient}>
			<span className={classes.OrderSummaryIngredient}>{ingredient}: </span>
			{ingredients[ingredient]}
		</li>
	));

const orderSummary = ({ ingredients }) => (
	<Aux>
		<h3>Your Order:</h3>
		<p>A delicious burger with the following ingredients:</p>
		<ul>{getOrderSummary(ingredients)}</ul>
		<p>Continue to Checkout?</p>
	</Aux>
);

export default orderSummary;
