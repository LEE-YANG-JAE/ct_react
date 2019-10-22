import { LOGIN_STATUS_CHANGE, LOGOUT } from '../constants/action-types';

const initialState = {
	loginInfo: {
		logined : false,
		sessionInfo: ''
	}
};

function loginReducer(state = initialState, action: any) {
	if (action.type === LOGIN_STATUS_CHANGE) {
		return Object.assign({}, state, {
			logined: state.loginInfo.logined = action.payload.logined,
			sessionInfo: state.loginInfo.sessionInfo = action.payload.sessionInfo,
		});
	} else if (action.type === LOGOUT) {
		return Object.assign({}, state, {
			logined: state.loginInfo.logined = false,
			sessionInfo: state.loginInfo.sessionInfo = '',
		});
	}
	return state;
}
export default loginReducer;
