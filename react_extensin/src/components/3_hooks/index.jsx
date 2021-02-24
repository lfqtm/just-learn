import React from 'react'
import ReactDOM from 'react-dom'

 export default function Demo() {

  const [count,setCount] = React.useState(0)
  const [name,setName] = React.useState('tom')

  React.useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count=>count+1)
    },1000)
    //知识点1:useEffect返回的函数是组件卸载的钩子函数
    return ()=>{
      clearInterval(timer)
    }
    //知识点2:[xxx，xxx]用于指定监听的state，[]空表示componentDidMount，
    // [count]表示componentDidMount和count引起的componentDidUpdate
  },[])

  const muRef = React.useRef()

  function add(){
    setCount(count => count + 1)
  }

  function changeName(){
    setName('jack')
  }

  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show(){
    console.log(muRef.current);
    alert(muRef.current.value)
  }

  return (
    <div>
      <h2>当前求和为：{count}</h2>
      <h2>我的名字是：{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
      <button onClick={unmount}>点我卸载</button>
      <br/>
      <input type='text' ref={muRef}/>
      <button onClick={show}>点我提示输入</button>
    </div>
  )
}

// export default Demo