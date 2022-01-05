import React, { Component } from 'react'
import PropType from 'prop-types'
import Item from '../item'
import  "./list.css";

export default class List extends Component {

    static propType = {
        todo:PropType.array.isRequired,
        updateTodo:PropType.func.isRequired,
        deleteTodo:PropType.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                 {
                     todos.map(todo => {
                         return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                     })
                 }
                </ul>
            </div>
        )
    }
}
