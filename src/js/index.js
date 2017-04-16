var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBody from './components/indexBody';
import 'antd/dist/antd.css';


export default class Index extends React.Component{
	render(){
		var components = <ComponentHeader/>;
		return (
			<div>
				{components}
				<ComponentBody userid={123} username={'Dic'}/>
				<div>
					{this.props.children}
				</div>
				<ComponentFooter/>
			</div>
		);
	};
}

/*
class Index extends React.Component{
	render(){
		var components = <ComponentHeader/>;
		return (
			<div>
				{components}
				<ComponentBody userid={123} username={'Dic'}/>
				<ComponentFooter/>
			</div>
		)
	}
}
*/

