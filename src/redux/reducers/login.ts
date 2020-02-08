import { LOGIN_STATUS_CHANGE, LOGOUT } from '../constants/action-types';

const initialState = {
	loginInfo: {
		logined: false,
		userId: '',
		locale: '',
		token: ''
	}
};

function loginReducer(state = initialState, action: any) {
	if (action.type === LOGIN_STATUS_CHANGE) {
		return Object.assign({}, state, {
			loginInfo: {
				logined: action.payload.logined,
				userId: action.payload.userId,
				locale: action.payload.locale,
				token: action.payload.token
			}
		});
	} else if (action.type === LOGOUT) {
		return Object.assign({}, state, {
			loginInfo: {
				logined: false,
				userId: '',
				locale: '',
				token: '',
			}
		});
	}
	return state;
}
export default loginReducer;
