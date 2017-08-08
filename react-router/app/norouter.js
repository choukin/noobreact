import React from 'react'
import {render} from 'react-dom'

class  About extends React.Component{
	render(){}
}
class Inbox extends React.Component{
	render(){}
}
class Home extends React.Component{
	render(){}
}
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {route:window.location.hash.substr(1)};
	}
	componentDidMount(){
		window.addEventListener('hashchange', ()=>{
			this.setState({
				route:window.location.hash.substr(1)
			})
		})
	}
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
						<li><a href="#/about">About</a></li>
						<li><a href="#/inbox">Inbox</a></li>

					</ul>
				</div>
			)

	}
}


const app = document.createElement('div');

document.body.appendChild(app);
render(<App />,app)