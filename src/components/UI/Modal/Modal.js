import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ children, show, modalClosed }) => (
	<Aux>
		<Backdrop showBackdrop={show} clicked={modalClosed} />
		<div
			className={classes.Modal}
			style={{
				transform: show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: show ? '1' : '0'
			}}
		>
			{children}
		</div>
	</Aux>
);

export default modal;
