import React from 'react';
import { store, persistor } from './redux/store';
import Framework from './layouts/Framework';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const { Fancy } = require('fancygrid-react');

class App extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			shown: false
		};
		Fancy.getModulesList();
	}
	render() {
		return (
			<div>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Framework />
					</PersistGate>
				</Provider>
			</div>
		);
	}
}

export default App;
