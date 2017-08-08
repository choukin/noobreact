import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'react-native'
import {NavigationActions} from 'react-navigation'

const AuthButton = ({logout, loginScreen, isLoggedIn})=>(
	<Button
		title={isloggedIn?'Log out':'Open Login Screen'}
		onPress={isLoggedIn?logout:loginScreen}
	/>
)

AuthButton.propTypes = {
	logout:PropTypes.func.isRequired,
	loginScreen:PropTypes.func.isRequired,
	isLoggedIn: ProTypes.bool.isRequired
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	logout: ()=> dispatch({type:'Logout'}),
	loginScreen: ()=> dispatch(NavigationActions.navigate({roteName: 'Login'}))	
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton)
	
