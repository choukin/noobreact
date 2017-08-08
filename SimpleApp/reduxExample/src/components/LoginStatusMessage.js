import React from 'react'
import Proptypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, StyleSheet, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation'

const styles = StyleSheet.create({
	welcome:{
		fontSize: 20,
		textAlgin: 'center',
		margin: 10
	}
})

const LoginStatusmessage = ({isLoggedIn, dispatch}) =>{
	if(!isLoggedIn){
		return <Text>Please Login</Text>
	}

	return (
		<View>
			<Text style={styles.welcome}>
			{'you are "logged in" right now'}
			</Text>
			<Button
				onPress={()=>{
					return dispatch(NavigationActions.navigate({routerName:'Profile'}))

				}}
				title="Profile"
			/>
		</View>
	)
}