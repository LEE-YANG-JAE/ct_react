import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript
// https://blog.cloudboost.io/updating-state-of-a-parentless-component-in-react-e6b43047c91e
declare global {
	interface Window {
		updateTopMostParent: any;
	}
}
window.updateTopMostParent = window.updateTopMostParent || {};

const TopMostParent: any = ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.updateTopMostParent = (someValue: any) => {
	// Update state of topmost parent when this method is called
	TopMostParent.setState({ shown: someValue.logined });
};
