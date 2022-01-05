import React, { Component } from "react";
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import List from './components/list'
export default class App extends Component {
  
  state = {
    todos:[
      {id:1,name:"吃饭",done:true},
      {id:2,name:"睡觉",done:false},
      {id:3,name:"打代码",done:true}
    ]
  }

  // met
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodo = [todoObj,...todos]
    this.setState({todos:newTodo})
  }
  
  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodo = todos.map(todo=>{
      if(todo.id===id) return {...todo,done}
      else return todo
    })
    this.setState({todos:newTodo})
  }
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodo = todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({todos:newTodo})
    
  }
  checkAllTodo=(done)=>{
    const {todos} = this.state
    const newTodo = todos.map(todo=>{
      return {...todo,done}
    })
    this.setState({todos:newTodo})
  }
  handlerClearAll=()=>{
    const {todos} = this.state
    const newTodo = todos.filter(todo=>{
      return !todo.done
    })
    this.setState({todos:newTodo})
  }
  


  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} handlerClearAll={this.handlerClearAll}/>
      </div>
          
  </div>
    );
  }
}
