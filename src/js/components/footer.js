import React from "React";
//import footerCss from '../../css/footer.css';
var footerCss = require("css/footer.css");

//var footerCss = require("../../css/footer.css");

export default class ComponentFooter extends React.Component{
	render(){
		return (<footer className={footerCss.miniFooter}><h1>这里是底部</h1></footer>)
	}
}
