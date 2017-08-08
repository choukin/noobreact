import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'react-native'
import {NavigationActions} from 'react-navigation'

const AuthButton = ({logout, loginScreen, isLoggedIn})=>{
	<Button
		title={isloggedIn?'Log out':'Open Login Screen'}
	/>
}
	