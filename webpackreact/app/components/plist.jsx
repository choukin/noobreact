import React from 'react'
//自定义一个ajax的方法
import {get} from '../utils/ajax'

export default class Plist extends React.Component{
	constructor(props){
		super(props);
		this.state = {"loading":false,"list":[]};
	}
	//当初次渲染完毕 设置该组件的属性firstView true
	compoentDidMount(){
		this.setState({"firstView":true})
	}
          //当传入的props有变化就发起请求,更新列表内容
	 componentWillReceiveProps(nextProps){
	 	let keyword = nextProps.keyword;
 let temp = `https://api.github.com/search/users?q=${ keyword }`
console.log("temp"+temp)
	 	this.setState({"loading":true,"firstView":false});
	 	// /模板字符串使用反引号(backtick或者叫backquote)来代替普通字符串中的双引号(double quote)或单引号(single quote).模板字符串可以包含有占位符(placeholder),占位符使用${ }这样的语法.占位符中表达式的值以及占位符两边的文本会一起传递给一个标签函数(Tag function).这个函数是由模板字符串开头(左边的反引号之前)的一个可选的表达式决定的.如果模板字符串开头没有任何表达式,则会使用默认的标签函数.
	 	//tab键上面的按键
	 	let url = `https://api.github.com/search/users?q=${ keyword }`;//
	 	console.log(url);
	 	//发起ajax请求
	 	get(url).then((data)=>{
	 		//更新本组件的state
	 		this.setState({"loading":false,"list":data.items});
	 	}).catch((error)=>{
	 		console.log(error)
	 	})
	 }

	 render(){
	 	const imgStyle = {width:"50px"}

	 	if(this.state.firstView){
	 		return (
	 			<h2>输入名称搜索内容</h2>

	 			)
	 	}

	 	if(this.state.loading){
	 		return (
	 			<h2>加载中...</h2>

	 			)
	 	}else{
	 		if(this.state.list.length === 0){
	 			return (
	 				<h2>暂无数据</h2>

	 				)
	 		}else{
	 			return (
	 				<div className="row">
	 				{this.state.list.map(people=>{
	 					return (
	 						<div className="col-sm-6 col-md-4 col-md-4 col-lg-3 " key={people.id}>
	 						<img src={people.avatar_url} style={imgStyle}/>
	 						<p className="card-text">{people.login}</p>
	 						</div>
	 						)
	 				})}
	 					
	 				</div>
	 				)
	 			}
	 		}
	 	}

	 
}