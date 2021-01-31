import React from 'react'
import {inject,observer} from 'mobx-react'
import { Button } from 'antd';

import 'antd/dist/antd.min.css'

@inject('store')  @observer
export default class Home extends React.Component {
    
    state={ }

    handleButtonClick(type){
        let {store} = this.props
        switch (type) {
            case 'add' :
                store.addTodo('一条新任务')
                break;
            case 'del' :
                store.deleteTodo('删除一条任务')
                break;
            case 'reset' :
                store.resetTodo('重置任务')
                break;
        }
    }

    render(){
        let {store} = this.props
        return (
            <div>
               當前时间 : {store.desc}
               <br/>
               <Button type="primary" onClick={()=>this.handleButtonClick('add')}>添加todo</Button>&nbsp;
               <Button type="primary" onClick={()=>this.handleButtonClick('del')}>删除todo</Button>&nbsp;
               <Button type="primary" onClick={()=>this.handleButtonClick('reset')}>更新todos</Button>
               <br/>
                {
                   store.todos.map((ele, index, arr)=>{
                        return (
                            <div key={index}>{ele}</div>
                        )
                    })
                }
            </div>
        )
    }

}