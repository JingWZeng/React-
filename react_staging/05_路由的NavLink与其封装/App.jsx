import React, { Component } from 'react'
import {Link,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            {/*<Link className="list-group-item" to="/about">About</Link>*/}
                            {/*<Link className="list-group-item" to="/home">Home</Link>*/}

                            {/*高亮路由 可以自由的添加类名，默认类名就是active*/}
                            {/*<NavLink activeClassName="atguigu"  className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>*/}

                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                    {/*<Route path="/about" element={<div>about</div>}/>*/}
                                    {/*<Route path="/home" element={<div>home</div>}/>*/}
                                {/*Switch可以让路由匹配到一个路由之后就停下，单一匹配，因为正常情况下的话，路由会去和每一个注册进行检测的*/}
                                {/*exact开启精准匹配。默认是模糊匹配*/}
                                <Switch>
                                    <Route  path="/about" component={About}/>
                                    <Route exact={true} path="/home" component={Home}/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
