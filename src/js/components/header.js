import React from "React";
import ReactDOM from "react-dom";
import {Link} from 'react-router';

export default class ComponentHeader extends React.Component{

	constructor(){
		super();
		this.state = {
			miniHeader:false //默认加载的时候不是mini的头部
		}
	};

	switchHeader(){
		this.setState({
			miniHeader:!this.state.miniHeader
		})
	};

	render(){

		const styleComponentHeader = {
			header: {
				backgroundColor:'#333',
				color:"#fff",
				paddingTop: (this.state.miniHeader) ? '3px' : '25px',
				paddingBottom: (this.state.miniHeader) ? '3px' : '25px'
			}
		}

		return (<header style={styleComponentHeader.header}>
					<h1 className='samllFontSize'>这里是头部</h1>
					<ul>
						<li><Link to={'/'}>首页</Link></li>
						<li><Link to={'/details'}>嵌套的详情页面</Link></li>
						<li><Link to={'/list'}>列表页面</Link></li>
					</ul>
				</header>)
	}
}
