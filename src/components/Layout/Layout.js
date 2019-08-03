import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = ({ children }) => (
	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Layout}>{children}</main>
	</Aux>
);

export default layout;
