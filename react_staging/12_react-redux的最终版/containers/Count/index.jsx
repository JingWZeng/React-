// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//引入action
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'

import React, {Component} from 'react';

class Count extends Component {

    increment = ()=>{
        const{value} = this.selectNumber
        this.props.increment(value*1)
    }
    decrement = ()=>{
        const{value} = this.selectNumber
        this.props.decrement(value*1)

    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.increment(value*1)
        }
    }

    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>我是Count组件,下方组件总人数为:{this.props.personCount}</h2>
                <h4>当前求和为：{this.props.count}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        );
    }
}

//使用connect()()创建并暴露一个Count的容器组件
// connect第一次调用必须传递两个参数，而且是函数
export default  connect(
    state => ({count:state.count,personCount:state.persons.length}),
    {
        increment,
        decrement,
        incrementAsync,
    }

)
(Count)


