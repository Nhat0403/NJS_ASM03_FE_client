const initialState = {
	idUser: '',
	token: '',
};

const ReducerSession = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_SESSION':
			console.log('idUser: ', action.data);

			const stateLogin = [...state.idUser, ...state.token];
			stateLogin.idUser = action.data.idUser;
			stateLogin.token = action.data.token;
			return stateLogin;

		case 'DELETE_SESSION':
			console.log('idUser: ', action.data);

			const stateLogout = [...state.idUser, ...state.token];
			stateLogout.idUser = action.data;
			stateLogout.token = action.data;
			return stateLogout;

		default:
			return state;
	}
};

export default ReducerSession;
