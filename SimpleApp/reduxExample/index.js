import React from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import AppReducer from '../src/reducers'
import AppWithNavigationState from '../src/navigators/Appnavigator'

class SimpleApp extends React.Component{
	store = createStore(AppReducer)
	render(){
		return (
				<Provider store={this.store}>
					<AppWithNavigationState/>
				</Provider>	
			)
	}
}


AppRegistry.registerComponent('SimpleApp', () => SimpleApp)
export default SimpleApp