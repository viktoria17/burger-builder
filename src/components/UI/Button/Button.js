import React from 'react';

import classes from './Button.css';

const button = ({ children, btnType, clicked }) => (
	<button className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>
		{children}
	</button>
);

export default button;
