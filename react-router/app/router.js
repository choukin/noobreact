import React from 'react'
import {render} from 'react-dom'
import {Router,Route, Link} from 'react-router'

class  About extends React.Component{
	render(){ return <h3>about</h3>}
}
class Inbox extends React.Component{
	render(){return (<div>
		<h2>inbox</h2>

		{this.props.children}
		</div>)}
}
class Home extends React.Component{
	render(){}
}
class Message extends React.Component{
	componentDidMount(){
		const id = this.props.params.id
		fetchMessage(id,function(err,message){
			this.setState({message:message})
		})
	}
	render(){
		return <h3>message{this.state.message}</h3>
	}
}
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {route:window.location.hash.substr(1)};
	}

	render(){


		return (
				<div>
					<h1>APP</h1>
					<ul>
						<li><a href="#/about">About</a></li>
						<li><a href="#/inbox">Inbox</a></li>

					</ul>
					{this.props.children}
				</div>
			)

	}
}


const app = document.createElement('div');

document.body.appendChild(app);
render(
	<Router>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="inbox" component={Inbox}>
					<Route path="messages/:id" component={Message} />
			</Route>
		</Route>
	</Router>


	,app)