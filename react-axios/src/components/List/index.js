import React, { Component } from 'react'
import { List, Avatar, Button, Skeleton } from 'antd'
import axios from 'axios';

const count = 3;
const fakeDataUrl = `https://api.github.com/search/users?q=lfq`;

export default class LoadUserList extends Component {

    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData(res => {
            console.log('#', res);
            this.setState({
                initLoading: false,
                data: res,
                list: res,
            });
        });
    }

    getData = async(callback )=> {
        // axios.get(fakeDataUrl).then(
        //     response => { callback(response) },
        //     error => { callback(error) }
        // )
        try {
            const response = await fetch(fakeDataUrl)
            const data = await response.json()
            console.log(data)
            callback(data.items)
        } catch (error) {
            console.log(error)
            callback(error)
        }
      
    };

    onLoadMore = () => {
        console.log('@', 111);
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;

        console.log('@', list);
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Skeleton avatar title={item.login} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.avatar_url} />
                                }
                                title={<a href={item.html_url}>{item.login}</a>}
                                description={item.followers_url}
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        )
    }
}