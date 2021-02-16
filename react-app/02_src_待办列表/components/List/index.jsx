import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
<<<<<<< HEAD
    render() {
        const {updateTodo,todos,deleteTodo} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo=>{
                            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                        })
                    }
                </ul>                
            </div>
        )
    }
=======
  render() {
    const { todos } = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo} />
            })
          }
        </ul>
      </div>
    )
  }
>>>>>>> d8465769931830c73819d7e75ef623c1d22f0066
}
