import React from 'react';

import classes from './Backdrop.css';

const backdrop = ({ showBackdrop, clicked }) =>
	showBackdrop ? <div className={classes.Backdrop} onClick={clicked} /> : null;

export default backdrop;
