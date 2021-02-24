import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count: 0
  }

  add = () =>{
    // 对象式的setState
    /*
    const { count } = this.state
    //知识点1: setState所引起的状态更新是异步的
    this.setState({count:count+1},()=>{
      //知识点2:对象式的setState，callback函数在render后执行
      console.log(this.state.count);
    })
    */

    // 知识点3:函数式的setState
    // this.setState((state,props)=>{
    //   return {count:state.count+1}
    // })
    // 简写，也有callback函数
    this.setState(state=>({count:state.count+1}))

    //总结
    //1.对象式的setState是函数式setState的语法糖
    //2.使用原则
      //2.1:如果新状态依赖于原状态，使用函数式；不依赖就相反



  }

  render() {
    return (
      <div>
        <h1>当前求和为： { this.state.count }</h1>
        <button onClick={this.add}>点我+1</button>

      </div>
    )
  }
}
