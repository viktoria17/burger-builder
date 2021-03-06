import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = ({ clicked }) => {
	return (
		<div className={classes.DrawerToggle} onClick={clicked}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default drawerToggle;
