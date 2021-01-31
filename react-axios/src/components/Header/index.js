import React,{Component} from 'react'
import { PageHeader, Input, message } from 'antd'

import './index.css'

const { Search } = Input;
const key = 'updatable';
const openMessage = () => {
  message.loading({ content: 'please wait...', key });
  setTimeout(() => {
    message.success({ content: 'success!', key, duration: 2 });
  }, 1000);
};

export default class Header extends Component {

  onSearch=(value)=>{
    value ? openMessage() : message.error('empty search value')
    console.log(value);
  }

  render(){
    return (
      <PageHeader
        className="site-page-header"
        title="搜索github用户"
        subTitle="search github users"
      >
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />

      </PageHeader>
    )
  }
}