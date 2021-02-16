import React, { Component } from 'react'
// import qs from 'querystring'

const detailData = [
    {id:'01',content:'你好,中国'},
    {id:'02',content:'你好,尚硅谷'},
    {id:'03',content:'你好,未来的自己'},
]

export default class Detail extends Component {
    render() {
        // console.log(this.props)
        const { id,title } = this.props.match.params

        // const { search } = this.props.location
        // const { id,title } = qs.parse(search.slice(1))

        // const { id,title } = this.props.location.state || {}
        const findResult = detailData.find(ele => {
            return ele.id === id
        }) || {}
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
