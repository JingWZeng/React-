//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
import store from "./redux/store";
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
// react-redux自动会做下面这个
// store.subscribe(()=>{ // 只要整个组件的redux里面的状态发生变化，就重新渲染整个组件，不然的话页面没反应
//     //渲染App到页面
//     ReactDOM.render(<App/>,document.getElementById('root'))
// })