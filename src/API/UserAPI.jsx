import axiosClient from './axiosClient';

const UserAPI = {
	getAllData: (query) => {
		const url = `/users/${query}`;
		return axiosClient.get(url);
	},

	getDetailData: (id) => {
		const url = `/users/${id}`;
		return axiosClient.get(url);
	},

	postSignUp: (query) => {
		const url = `/users/signup/${query}`;
		return axiosClient.post(url);
	},

	postLogin: (query) => {
		const url = `users/login/${query}`;
		return axiosClient.post(url);
	}
};

export default UserAPI;
