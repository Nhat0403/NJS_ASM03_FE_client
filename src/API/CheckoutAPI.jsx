import axiosClient from './axiosClient';

const CheckoutAPI = {
	postEmail: (query) => {
		const url = `/email${query}`;
		return axiosClient.post(url);
	},
	postOrder: (query, data) => {
		const url = `/orders${query}`;
		return axiosClient.post(url, data);
	}
};

export default CheckoutAPI;
