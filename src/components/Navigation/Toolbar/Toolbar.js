import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ({ drawerToggleClicked }) => (
	<header className={classes.Toolbar}>
		<DrawerToggle clicked={drawerToggleClicked} />
		<div className={classes.Logo}>
			<Logo />
		</div>
		<div className={classes.DesktopOnly}>
			<NavigationItems />
		</div>
	</header>
);

export default toolbar;
