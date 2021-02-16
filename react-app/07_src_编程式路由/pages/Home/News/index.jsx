import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

export default class News extends Component {

    state = {
        messageArr: [
            { id: "01", title: "消息1" },
            { id: "02", title: "消息2" },
            { id: "03", title: "消息3" },
        ]
    }

    replaceShow = (id, title) => {
        //接受param参数
        this.props.history.replace(`/home/news/detail/${id}/${title}`)
        //接受searchcas
        // this.props.history.replace(`/home/news/detail?id=${id}&title=${title}`)

        //接受state参数
        // this.props.history.replace(`/home/news/detail`, {id,title})
    }

    pushShow = (id, title) => {
        //接受param参数
        this.props.history.push(`/home/news/detail/${id}/${title}`)
        //接受searchcas
        // this.props.history.replace(`/home/news/detail?id=${id}&title=${title}`)

        //接受state参数
        // this.props.history.replace(`/home/news/detail`, {id,title})
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(ele => {
                            return (
                                <li key={ele.id}>
                                    {/* 接受params参数方式 */}
                                    <Link to={`/home/news/detail/${ele.id}/${ele.title}`}>{ele.title}</Link>
                                    &nbsp;<button onClick={() => this.pushShow(ele.id, ele.title)}>push查看</button>
                                    &nbsp;<button onClick={() => this.replaceShow(ele.id, ele.title)}>replace查看</button>

                                    {/* 接受search参数方式 */}
                                    {/* <Link to={`/home/news/detail/?id=${ele.id}&${ele.title}`}>{ele.title}</Link>  */}

                                    {/* 接受state参数方式 */}
                                    {/*  replace,不留下历史记录*/}
                                    {/* <Link replace to={{pathname:'/home/news/detail', state:{id:ele.id, title:ele.title}}}>{ele.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 接受params参数 */}
                <Route path="/home/news/detail/:id/:title" component={Detail} />

                {/* 接受search参数方式 */}
                {/* <Route path="/home/news/detail" component={Detail} /> */}

                {/* 接受state参数方式 */}
                <Route path="/home/news/detail" component={Detail} />
            </div>
        )
    }
}
