import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
	backs = ()=>{
		this.props.history.goBack()
	}
	forwards = ()=>{
		this.props.history.goForward()
	}
	gos = ()=>{
		this.props.history.go(2)
	}
	render() {
		console.log('Header组件收到的props是',this.props);
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.backs}>后退</button>&nbsp;&nbsp;
				<button onClick={this.forwards}>前进</button>&nbsp;&nbsp;
				<button onClick={this.gos}>前进2步</button>
			</div>

		)
	}
}
// withRouter让一般组件拥有路由组件的props属性，接受一个一般组件，返回一个新组件
export default withRouter(Header)