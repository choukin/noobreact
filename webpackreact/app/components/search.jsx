import React from 'react'
import ReactDOM from 'react-dom'
export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this)
	}
	handleSearch(){
	          let name = ReactDOM.findDOMNode(this.refs.name).value;
		if(name===''){
			return ;
		}
console.log("name"+name);
		this.props.sendAction(name);
	}
	render(){
		return (
		<div>
			<input type="text"  ref="name"  placeholder="请输入您想搜索的名称"/>
			<button onClick={this.handleSearch} >搜索</button>
		</div>
		)
	}
}