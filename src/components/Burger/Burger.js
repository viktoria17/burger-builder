import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredient/BurgerIngredient';

const burger = () => {
	return (
		<div className={classes.Burger}>
			<BurgerIngredients type="bread-top" />
			<BurgerIngredients type="meat" />
			<BurgerIngredients type="cheese" />
			<BurgerIngredients type="salad" />
			<BurgerIngredients type="bacon" />
			<BurgerIngredients type="bread-bottom" />
		</div>
	);
};

export default burger;
