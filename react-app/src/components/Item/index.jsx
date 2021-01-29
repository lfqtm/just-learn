import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

    static propTypes = {
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    state = {mouse:false}

    //鼠标移入，移出回调
    handleMouse =(flag)=>{
        //高阶函数，返回一个函数以供调用
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    //勾选选择框回调
    handleCheck=(id)=>{
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //删除一个todo的回调
    handleDelete=(id)=>{
        if(window.confirm('是否确认删除？')){
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display:mouse? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
