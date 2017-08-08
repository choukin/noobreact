import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addNavigationHelpers, Stacknavigator} from 'react-navigation'

import LoginScreen from './components/LoginScreen'
import MainScreen from './components/MainScreen'
import ProfileScreen from './components/profileScreen'

export const AppNavigator = Stacknavigator({
	Login:{screen:LoginScreen},
	Main:{screen:MainScreen},
	Profile:{screen:ProfileScreen}
})

const AppWithnavigationSate = ({dispatch, nav})=>{
	<AppNavigator navigation={addNavigationHelpers({dispatch, state:nav})}/>
}

AppWithnavigationSate.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav:PropTypes.object.isRequired
}

const mapStateToProps = state =>{
	nav:state.nav
}

export default connect(mapStateToProps)(AppWithnavigationSate)