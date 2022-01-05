//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入路由器
import {BrowserRouter} from 'react-router-dom'
// HashRouter 有#号。#号后面的资源都不会带给服务器的
//引入App
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)