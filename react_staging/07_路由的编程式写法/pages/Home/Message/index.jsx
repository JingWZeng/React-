import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
	state = {
		msgArr:[
			{id:1,title:'消息1'},
			{id:2,title:'消息2'},
			{id:3,title:'消息3'},
		]

	}
	pushShow = (id,title) =>{
		this.props.history.push(`/home/message/detail/${id}/${title}`)

	}
	replaceShow = (id,title)=>{
		// replace跳转+params参数
		this.props.history.replace(`/home/message/detail/${id}/${title}`)
		// replace跳转+search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

	}
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
		return (
			<div>
				<ul>
					{
						this.state.msgArr.map(msg=>{
							return(
								<li key={msg.id}>
									{/*向路由组件传递param参数 传递和声明一起*/}
									<Link  to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
									&nbsp;&nbsp;<button onClick={()=>{this.pushShow(msg.id,msg.title)}}>push查看</button>
									&nbsp;&nbsp;<button onClick={()=>{this.replaceShow(msg.id,msg.title)}}>replace查看</button>
									{/*向路由组件传递search参数，正常注册路由就行 */}
									{/*<Link  to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>*/}
									{/*向路由组件传递state参数，正常注册路由就行 */}
									{/*<Link replace={true} to={{pathname: '/home/message/detail',state:{id:msg.id,title:msg.title}}}>{msg.title}</Link>*/}

								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/*声明接受params的参数*/}
				<Route path="/home/message/detail/:id/:title" component={Detail}/>


				{/*search正常注册路由就行*/}
				{/*<Route path="/home/message/detail" component={Detail}/>*/}

				{/*state传递参数正常注册路由就行*/}
				{/*<Route path="/home/message/detail" component={Detail}/>*/}

				<button onClick={this.backs}>后退</button>&nbsp;&nbsp;
				<button onClick={this.forwards}>前进</button>&nbsp;&nbsp;
				<button onClick={this.gos}>前进2步</button>
			</div>
		)
	}
}
