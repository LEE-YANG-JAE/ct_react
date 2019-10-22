import { LOGIN_STATUS_CHANGE, LOGOUT } from '../constants/action-types';

export function loginStatusChange(payload: any) {
	return { type: LOGIN_STATUS_CHANGE, payload };
}

export function logout() {
	return { type: LOGOUT };
}
