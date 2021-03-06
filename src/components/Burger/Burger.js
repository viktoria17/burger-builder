import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
	const existingIngredients = Object.keys(props.ingredients);

	const transformedIngredients = existingIngredients.map(ingredientKey => {
		return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
			return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
		});
	});

	let ingredientsInBurger = transformedIngredients.reduce(
		(arr, el) => arr.concat(el),
		[]
	);

	if (ingredientsInBurger.length === 0) {
		ingredientsInBurger = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{ingredientsInBurger}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
