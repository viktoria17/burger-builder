import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ({ link, children, exact }) => (
	<li className={classes.NavigationItem}>
		<NavLink
			activeClassName={classes.active}
			to={link}
			exact={exact}
		>{children}</NavLink>
	</li>
);

export default navigationItem;
