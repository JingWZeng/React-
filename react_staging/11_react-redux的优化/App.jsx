//创建“外壳”组件App
import React,{Component} from 'react'
import Count from "./containers/Count";
import store from "./redux/store";

//创建并暴露App组件
export default class App extends Component{
	render(){
		return (
			<div>
				{/* 给容器组件传递store store={store}*/ }
				<Count/>
			</div>
		)
	}
}
