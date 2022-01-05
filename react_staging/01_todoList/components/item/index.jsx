import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
    state = {mouse:false}
    
    handlerMouse = (flag) => {
        return()=>{
            this.setState({mouse:flag})
        }
    }
    handlerClick = (id) => {
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }  
    }
    handleDelete = (id) => {
        if(window.confirm('确定删除吗')){
            this.props.deleteTodo(id)
        }
       
    }
    
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <div>
               <li  style={{background: mouse?'#ccc' : '#fff'}} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handlerClick(id)}/>
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger'onClick={()=>{this.handleDelete(id)}} style={{display:mouse? 'block ':'none' }}>删除</button>
            </li>
            </div>
        )
    }
}
