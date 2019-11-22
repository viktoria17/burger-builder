import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-5de73.firebaseio.com/'
});

export default instance;
