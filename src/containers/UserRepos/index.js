import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Spin, Table } from 'antd';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { formatedDate } from 'utils/moment';
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { makeSelectIsLoading, makeSelectList } from './selectors'
import { getUserRepos } from './actions'

class UserRepos extends PureComponent{

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getUserRepos(id);
    }

    render() {
        const { match: { params: { id } } } = this.props;
        const { list, isLoading } = this.props;
        
        let content = null;

        if (isLoading) {
            content = (
                <Spin></Spin>
            )
        } else {
            content = (
                <div className="w-100">
                    <Table
                        bordered
                        pagination={{pageSize: 20}}
                        rowKey="id"
                        columns={[
                            {
                                title: 'Name',
                                dataIndex: 'name',
                                key: 'name',
                                sorter: (a, b) => {
                                    if (a.name > b.name) {
                                        return 1;
                                    }
                                    if (a.name < b.name) {
                                        return -1;
                                    }
                                    return 0;
                                },
                            },
                            {
                                title: 'description',
                                dataIndex: 'description',
                                key: 'description',
                                width: '20%'
                            },
                            {
                                title: 'Forks Count',
                                dataIndex: 'forks_count',
                                key: 'forks_count',
                            },
                            {
                                title: 'Watchers Count',
                                dataIndex: 'watchers_count',
                                key: 'watchers_count'
                            },
                            {
                                title: 'Open Issues Count',
                                dataIndex: 'open_issues_count',
                                key: 'open_issues_count'
                            },
                            {
                                title: 'Private',
                                dataIndex: 'private',
                                key: 'private',
                                render: value => {
                                    if (!value) {
                                        return (
                                            <MinusOutlined />
                                        )
                                    } else {
                                        return (
                                            <CheckOutlined />
                                        )
                                    }
                                }
                            },
                            {
                                title: 'Link',
                                dataIndex: 'url',
                                key: 'url',
                                render: value => {
                                    return (
                                        <a href={value} rel="noopener noreferrer" target="_blank">Repo</a>
                                    )
                                }
                            }
                        ]}
                        dataSource={list}
                    />
                </div>
            )
        }

        return (
            <div className='mt-4 container'>
                <div>
                    <Link to="/">user list</Link>
                </div>
                <div>
                    <Link to={`/${id}`}>user profile</Link>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    {content}
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
	list: makeSelectList(),
	isLoading: makeSelectIsLoading(),
})

const withConnect = connect(mapStateToProps, { getUserRepos })

export default compose(
	injectReducer({ key: 'userRepos', reducer }),
	injectSaga({ key: 'userRepos', saga }),
	withConnect
)(UserRepos)