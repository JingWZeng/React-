import React, {Component} from 'react';

class SetState extends Component {
    state = {
        count:0
    }
    add = ()=>{
        // 对象式的setState
        // const {count} = this.state
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count)
        // })

        // 函数式的
        this.setState(state => ({count:state.count+1}),()=>{
            console.log(this.state.count)
            }
        )

    }
    render() {
        console.log(this.props.name)
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <h4>我是来自renderProps的父组件的数据:{this.props.name}</h4>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default SetState;