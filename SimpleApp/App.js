import React from 'react'
import {
	AppRegistry,
	View,
	Button,
	Text
} from 'react-native'
import {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation'

class HomeScreen extends React.Component{
	static navigationOptions = {
		title: '欢迎',
		headerBackTitle: 'test header backTItle',
	} 

	render() {
		const {navigate} = this.props.navigation

		return (
			<View>	
			<Text>Hello, Navigation</Text>
			<Button 
				onPress={() => navigate('Chat',{user:'Lucy'})}
				title="Chat with Lucy"
			/>
			</View>
			)
	}
}

class ChatScreen extends React.Component{
	static navigationOptions = ({navigation})=>{

		const {state, setParams} = navigation
		const isInfo = state.params.mode === 'info'
		const {user} = state.params
		return {
			headerBackTitle: 'test header backTItle',
			
			title: isInfo? `${user}'s Contact Info`:`adf with ${user}`,
			headerRight:(
				<Button 
				title={isInfo ?'Done' : `${user}'s info`}
				onPress={()=> setParams({mode:isInfo?'none':'info'})}
			/>)
	}
	}
	render(){
		const {params} = this.props.navigation.state
		return (
			<View>
				<Text>Chat with {params.user}</Text>
			</View>		
		)
	}
}

class RecentChatsScreen extends React.Component {
	render(){
		const {navigate} = this.props.navigation
		return (<View>
		<Text>List of recent chats</Text>
		<Button
		onPress={()=>{navigate('Chat',{user:'Lucy'})}}
		title="chat with lucy"
		/>
		<Button
			onPress={()=>navigate('MyDrawer')}
			title="show Drawer"
		/>
		</View>)
	}
}

class AllContactScreen extends React.Component {
	render(){
		return <Text>List of all contacts</Text>
	}
}

/**
* tab 导航
*/
const MainScreenNavigator = TabNavigator({
	Recent: {screen: RecentChatsScreen},
	All: {screen: AllContactScreen}
})
MainScreenNavigator.navigationOptions = {
	title: 'My Chats',
	headerBackTitle: null,
}

class MyHomeScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Home'
	}
	render(){
		return (
			<Button
				onPress={()=>this.props.navigation.navigate('Notifications')}
				title="Go to notifications"
			/>
			)
	}
}

class MyNotifications extends React.Component{
	static navigationOptions = {
		drawerLabel:'Natifications',
	}
	render(){
		return (
			<Button
				onPress={()=>this.props.navigation.goBack()}
				title="Go back home"
			/>
			)
	}
}

const MyDrawer = DrawerNavigator({
	DrawerHome:{
		screen:MyHomeScreen,
	},
	Notifications:{
		screen: MyNotifications
	}
})

const SimpleApp = StackNavigator({
	Main: {screen: MainScreenNavigator},
	Home: {screen: HomeScreen},
	MyDrawer:{screen:MyDrawer},
	Chat:{
		screen:ChatScreen,
		navigationOptions:{

		}
	    }
	},
	{
	mode: 'modal',
	headerMode: 'float'
})


AppRegistry.registerComponent('SimpleApp', () => SimpleApp)