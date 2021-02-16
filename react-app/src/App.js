import React, { Component } from 'react'

import { Button,DatePicker } from 'antd'
import { WechatOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker;

export default class App extends Component {

    render() {
        return (
            <div>
                App...
                <Button type='primary'>按钮1</Button>
                <WechatOutlined/>
                <DatePicker/>
                <RangePicker/>
            </div>
        )
    }
}