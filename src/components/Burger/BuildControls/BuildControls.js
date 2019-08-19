import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = ({ ingredientAdded, ingredientRemoved, disableButton, burgerPrice }) => (
	<div className={classes.BuildControls}>
		<p>
			Current Price: <strong>{burgerPrice.toFixed(2)}</strong>
		</p>
		{controls.map((ctrl) => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				added={() => ingredientAdded(ctrl.type)}
				removed={() => ingredientRemoved(ctrl.type)}
				disabled={disableButton[ctrl.type]}
				totalPrice={burgerPrice}
			/>
		))}
	</div>
);

export default buildControls;
