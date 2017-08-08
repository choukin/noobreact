import './bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import Plist from './components/plist'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {"keyword":""}
		this.refreshKeyWord = this.refreshKeyWord.bind(this)

	}

	refreshKeyWord(name){

		this.setState({"keyword":name})
	}
	render(){
        //JSX here!
        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">搜索 Github 用户</h3>
              <Search sendAction={this.refreshKeyWord} />
            </section>
            <Plist keyword={this.state.keyword}/>
          </div>
        )

	}
}

const app = document.createElement('div');

document.body.appendChild(app);

ReactDOM.render(<App/>,app)

