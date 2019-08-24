import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = ({ link, children, active }) => (
	<li className={classes.NavigationItem}>
		<a
			className={active ? 'active' : null}
			href={link}
		>{children}</a>
	</li>
);

export default navigationItem;
