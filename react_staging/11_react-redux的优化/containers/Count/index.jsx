// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

import React, {Component} from 'react';

class Count extends Component {

    increment = ()=>{
        const{value} = this.selectNumber
        this.props.jia(value*1)
    }
    decrement = ()=>{
        const{value} = this.selectNumber
        this.props.jian(value*1)

    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    }

    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1,500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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



// 映射状态
// const mapStateToProps= state => ({count:state})

// 映射操作状态的方法
// const mapDispatchToProps= dispatch =>(
//    {
//         jia:number => dispatch(createIncrementAction(number)),
//         jian:number => dispatch(createDecrementAction(number)),
//         jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
//     }
// )

//使用connect()()创建并暴露一个Count的容器组件
// connect第一次调用必须传递两个参数，而且是函数
export default  connect(
    state => ({count:state}),
    //mapDispatchToProps的一般写法
    /* dispatch => ({
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }) */

    //mapDispatchToProps的简写 注意对比，和上面两个目的是一样的，都是分发一个action，比如jia的最终目的就是调用分发一个加的action
    //只有给一个action给它，react-redux会自动帮你dispatch（帮你自动分发）
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }

)
(Count)


