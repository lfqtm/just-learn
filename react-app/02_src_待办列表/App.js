import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ]
  }

<<<<<<< HEAD
    //添加一个组件
    addTodo =(todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        this.setState({
            todos:newTodos
        })
    }

    //更新一个todo
    updateTodo =(id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map(todo=>{
            if(todo.id === id) return {...todo,done}
            else return todo
        })
        this.setState({todos:newTodos})
    }

    //删除一个todo
    deleteTodo=(id)=>{
        const {todos} = this.state
        const newTodos = todos.filter(todo=>{
            return todo.id !== id
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer/>                    
                </div>
            </div>
        )
    }
=======
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })

  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
>>>>>>> d8465769931830c73819d7e75ef623c1d22f0066
}