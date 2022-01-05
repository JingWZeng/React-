import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    
    handleChange = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handlerClearAll = () => {
        this.props.handlerClearAll()
        
    }
    

    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((prev,todo)=>{
            return prev + (todo.done ? 1 : 0)
        },0)
        const total = todos.length
        return (
            <div className="todo-footer">
            <label>
            {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
            <input type="checkbox" checked={doneCount===total&&total!==0 ? true : false} onChange={this.handleChange}/>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.handlerClearAll} className="btn btn-danger">清除已完成任务</button>
        </div>
        )
    }
}
