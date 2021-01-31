import React, { Component } from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
=======
import { nanoid } from 'nanoid'
>>>>>>> d8465769931830c73819d7e75ef623c1d22f0066
import './index.css'

export default class Header extends Component {

<<<<<<< HEAD
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleOnKeyUp=(event)=>{
        const {keyCode,target} = event
        if(keyCode !== 13) return;
        if(target.value.trim() === '') {
            alert('输入不能为空')
            return;
=======
        handleOnKeyUp = (event) => {
                const { keyCode, target } = event
                if (keyCode !== 13) return;
                if (target.value.trim() === '') {
                        alert('输入不能为空')
                        return;
                }
                const todoObj = { id: nanoid(), name: target.value, done: false }
                this.props.addTodo(todoObj)
                target.value = ''
>>>>>>> d8465769931830c73819d7e75ef623c1d22f0066
        }

        render() {
                return (
                        <div className="todo-header">
                                <input type="text" onKeyUp={this.handleOnKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
                        </div>
                )
        }
}
