import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = ({ children }) => (
	<Aux>
		<Toolbar/>
		<main className={classes.Layout}>{children}</main>
	</Aux>
);

export default layout;
