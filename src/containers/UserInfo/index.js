import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Spin, Descriptions, Avatar } from 'antd';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { formatedDate } from 'utils/moment';
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { makeSelectIsLoading, makeSelectUser } from './selectors'
import { getUser } from './actions'

export function formatField(value) {
    if (!value) {
        return 'no';
    } else {
        return value;
    }
}

class UserInfo extends PureComponent{

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.getUser(id);
    }

    render() {
        const { user, isLoading } = this.props;
        
        let content = null;

        if (isLoading) {
            content = (
                <Spin></Spin>
            )
        } else {
            const reposLink = `/${user.login}/repos`;

            content = (
                <div>
                     <Descriptions title="User Info" bordered>
                        <Descriptions.Item label="UserName">{user.login}</Descriptions.Item>
                        <Descriptions.Item label="Company">{formatField(user.company)}</Descriptions.Item>
                        <Descriptions.Item label="Email">{formatField(user.email)}</Descriptions.Item>
                        <Descriptions.Item label="Followers">{ user.followers}</Descriptions.Item>
                        <Descriptions.Item label="Last Profile Update">
                            {formatedDate(user.updated_at)}
                        </Descriptions.Item>
                        <Descriptions.Item label="Avatar">
                            <Avatar src={user.avatar_url} />
                        </Descriptions.Item>
                    </Descriptions>
                    {user.id && (
                        <div className="mt-4">
                            <Link to={reposLink}>Repositories</Link>
                        </div>
                    )}
                </div>
            )
        }

        return (
            <div className='mt-4 container'>
                <div>
                    <Link to="/">user list</Link>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    {content}
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
	user: makeSelectUser(),
	isLoading: makeSelectIsLoading(),
})

const withConnect = connect(mapStateToProps, { getUser })

export default compose(
	injectReducer({ key: 'userInfo', reducer }),
	injectSaga({ key: 'userInfo', saga }),
	withConnect
)(UserInfo)