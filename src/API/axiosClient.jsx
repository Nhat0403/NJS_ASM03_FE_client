// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import getCookie from '../getCookie';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const token = getCookie('token_user');
console.log('token: ' + token);
const axiosClient = axios.create({
	baseURL: 'https://njs-asm-03-be.vercel.app/',
	headers: {
		Authorization: 'Bearer ' + token,
		'Content-Type': 'application/json'
	},
	paramsSerializer: (params) => queryString.stringify(params),
	withCredentials: true
});
axiosClient.interceptors.request.use(async (config) => {
	// Handle token here ...
	return config;
});
axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		// Handle errors
		throw error;
	}
);
export default axiosClient;
