import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: 1,
		email: 1,
		address: {
			street: '',
			postalCode: ''
		},
		loading: false,
	};

	orderHandler = (e) => {
		e.preventDefault();

		this.setState({
			loading: true
		});

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Vika',
				address: {
					city: 'Tallinn',
					country: 'Estonia',
				},
				email: 'viktoria@test.com'
			}
		};

		axios.post('/orders.json', order)
			.then(res => {
				this.setState({
					loading: false
				});

				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({
					loading: false,
				});
			})
	};

	render() {
		let form = (
			<form>
				<input className={classes.Input} type="text" name="name" placeholder="Your Name" />
				<input className={classes.Input} type="email" name="email" placeholder="Your Email" />
				<input className={classes.Input} type="text" name="street" placeholder="Street" />
				<input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
				<Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
			</form>
		);

		if (this.state.loading) {
			form = <Spinner/>
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter Your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
