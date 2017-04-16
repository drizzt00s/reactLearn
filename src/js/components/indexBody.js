import React from "react";
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';
import MinxinLog from './mixins';
import ReactMixin from 'react-mixin';
import { Input } from 'antd';

export default class ComponentBody extends React.Component{

	constructor(){
		super();//调用基类的所有的初始化方法
		this.state = {username :'Terry'};
	};

	changeUserInfo(name){
		this.setState({username:name});
		//第一种方式
		/*
		var mySubmitButton = document.getElementById('submitButton');
		ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';*/

		//第二种方式
		this.refs.submitButton.style.color = 'green';
		MinxinLog.log();
	};

	handleChildValueChange(event){
		this.setState({
			username:event.target.value
		});
	};

	render(){

		const myStyle = {
				"myCss": {
				"color": "red"
			}
		}

		return (<div>
				<h2>页面主体布局</h2>
				<Input placeholder='basic' />
				<p>{this.state.username}</p>
				<p>user id: {this.props.userid}</p>
				<p>user name: {this.props.username}</p>
				<input id='submitButton' ref='submitButton' type='button' value='提交' onClick={this.changeUserInfo.bind(this, '李阿达')} />
				<BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
			</div>)
		};
	}

	//ReactMixin(ComponentBody.prototype, MinxinLog)
