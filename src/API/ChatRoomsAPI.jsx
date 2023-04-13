import axiosClient from './axiosClient';

const ChatRoomsAPI = {
	getMessageByRoomId: (roomId) => {
		const url = `/chatrooms/getById?roomId=${roomId}`;
		return axiosClient.get(url);
	},

	createNewRoom: (query) => {
		const url = `/chatrooms/createNewRoom/${query}`;
		return axiosClient.post(url);
	},

	addMessage: (query) => {
		const url = `/chatrooms/addMessage${query}`;
		return axiosClient.put(url);
	},
};

export default ChatRoomsAPI;
