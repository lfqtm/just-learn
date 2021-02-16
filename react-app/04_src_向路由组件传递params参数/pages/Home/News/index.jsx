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

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(ele => {
                            return (
                                <li key={ele.id}>
                                    <Link to={`/home/news/detail/${ele.id}/${ele.title}`}>{ele.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/news/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}
