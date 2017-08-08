import {combinereducers} from 'redux'
import {NavigationActions} from 'react-navigation'

import {AppNavigator} from '../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main')
const tempnavState = AppNavigator.router.getStateForAction(firstAction)
const secondAction = AppNavigator.router.getActionForPathAndParams('Login')
const initialNavState = AppNavigator.router.getStateForAction(secondAction, tempnavState)


function nav(state = initialNavState, action){
	let next State;
	switch(action.type){
		case 'Login':
		 nextState = AppNavigator.router.getStateForAction(
		 	NavigationActions.navigate({routeName: 'Login'}),
		 	state
		 	);
		 break;
		case 'Logout':
		  nextState = AppNavigator.router.getStateForAction(
		  	 NavigationActions.navigate({routeName:'Login'}),
		  	 state
		  	) 
		  break;
		default:
		  nextState = AppNavigator.router.getStateForAction(action,state) 
	}

	return nextState || state
}


const initialAuthState = {isLoggedIn: false}

function auth(state = initialAuthState, action){
	switch(action.type){
		case 'Login':
		 return {...state,isLoggedIn:true}
		case 'Logout':
		 return {...state, isLoggedIn:false} 
		default:
		return state 
	}
}

const AppReducer = combineReducers({
	nav,
	auth
})

export default AppReducer
