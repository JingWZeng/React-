import React, { Component } from 'react'
import PropType from 'prop-types'
import { nanoid } from "nanoid";
import './header.css';

export default class Header extends Component {
     
    static propType = {
        addTodo:PropType.func.isRequired
    }

    handlerKeyUp=(event)=>{
      const {keyCode,target} = event
      if(keyCode!==13) return
      if(target.value.trim() === '') {
          alert('输入不能空')
          return
      }
      let newObj = {id:nanoid(),name:target.value,done:false}
      this.props.addTodo(newObj)
      target.value = ''
    }
    render() {
        return (
            <div className ="todo-header">
                <input type="text" onKeyUp={this.handlerKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
