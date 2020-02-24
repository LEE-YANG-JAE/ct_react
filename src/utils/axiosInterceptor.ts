import axios from 'axios';
import { store } from '../redux/store';
import { loginStatusChange, logout } from '../redux/actions';

// https://dev.to/teroauralinna/global-http-request-and-response-handling-with-the-axios-interceptor-30ae
const axiosInstance = axios.create({
	baseURL: '/',
	timeout: 1000
});
const isHandlerEnabled = (config: any) => {
	return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};
const requestHandler = async (request: any) => {
	if (isHandlerEnabled(request)) {
        // Modify request here
        const data = {
			token: store.getState().loginReducer.loginInfo.token
		};
        request.headers['Authorization'] = 'Bearer '.concat(data.token);
        
		const header = {
			headers: {
				Authorization: 'Bearer '.concat(data.token)
			}
        };
		await axios
			.post(process.env.REACT_APP_API_URL + '/api/jwtrenew', data, header)
			.then((res) => {
				const loginInfo: any = store.getState().loginReducer.loginInfo;
				loginInfo.token = res.data.renewToken;
				store.dispatch(loginStatusChange(loginInfo));
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status === 500 || error.response.status === 401 || error.response.status === 403) {
					localStorage.clear();
					store.dispatch(logout());
					const loginInfo: any = {
						logined: false
					};
					window.updateTopMostParent(loginInfo);
				}
			});
	}
	return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));
const errorHandler = (error: any) => {
	if (isHandlerEnabled(error.config)) {
		// Handle errors
	}
	return Promise.reject({ ...error });
};

const successHandler = (response: any) => {
	if (isHandlerEnabled(response.config)) {
		// Handle responses
	}
	return response;
};

axiosInstance.interceptors.response.use((response) => successHandler(response), (error) => errorHandler(error));
export default axiosInstance;
