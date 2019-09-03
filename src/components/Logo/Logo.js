import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = ({ height }) => (
	<div className={classes.Logo} style={{ height: height }}>
		<img src={burgerLogo} alt="burger" />
	</div>
);

export default logo;
