import React from 'react'
import {render} from 'react-dom'

const About = React.createClass({})
const Inbox = React.createClass({})
const Home = React.createClass({})

const App = React.createClass({
	getInitialState(){
		return {
			route:window.location.hash.substr(1)
		}
	},
	componentDidMount(){
		windwo.addEventListener('hashchange', ()=>{
			this.setState({
				route:window.location.hash.substr(1)
			})
		})
	},
	render(){
		let Child
		switch (this.state.route) {
			case '/about':
				// statements_1
				Child = About;
				break;
			case '/inbox':
			    Child = Inbox;
			 	break;	
			default:
				Child = Home;
				// statements_def
				break;
		}

		return (
				<div>
					<h1>APP</h1>
					<ul>
						<li><a href="#/about">About</li>
						<li><a href="#/inbox">Inbox</li>

					</ul>
				</div>
			)

	}
})

React.render(<App />,document.body)