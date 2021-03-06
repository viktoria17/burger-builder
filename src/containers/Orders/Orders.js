import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};

	componentDidMount() {
		axios.get('orders.json')
			.then((res) => {
				const fetchedOrders = [];

				console.log('aa ', res.data)

				for (let key in res.data) {
					console.log('[key]: ', key);
					console.log('res.data[key]: ', res.data[key]);
					fetchedOrders.push({
						...res.data[key],
						id: key
					});
				}

				this.setState({ loading: false, orders: fetchedOrders })
			})
			.catch((err) => {
				this.setState({ loading: false })
			});
	}

	render() {
		return (
			<div>
				<Order/>
				<Order/>
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
