import React, { PureComponent } from 'react';
import { Input, Spin, Card } from 'antd';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { debouncedDecorator } from 'utils/values';
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { makeSelectIsLoading, makeSelectList } from './selectors'
import { getUsers } from './actions'

const { Meta } = Card;

class UserList extends PureComponent{

    constructor(props) {
        super(props);
        this.changeInput = debouncedDecorator(this.changeInput, 300);
    }

    changeInput = value => {
        if (value.length > 1) {
            this.props.getUsers(value);   
        }
    }

    _changeInput = ev => {
        const { target: { value } } = ev;
        this.changeInput(value);
    }

    goToUserInfo = item => ev => {
        this.props.history.push(`/${item.login}`);
    }

    render() {
        const { list, isLoading } = this.props;
        
        let content = null;

        if (isLoading) {
            content = (
                <Spin></Spin>
            )
        } else {
            content = list.map(item => {
                return (
                    <div key={item.id} className="col-4 mb-3">
                        <Card
                            hoverable
                            cover={<img alt="example" src={item.avatar_url} />}
                            onClick={this.goToUserInfo(item)}
                        >
                            <Meta title={item.login} description={item.url} />
                        </Card>
                    </div>
                )
            })
        }


        return (
            <div className="mt-4 container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Input 
                            placeholder="Type UserName"
                            onChange={this._changeInput}
                        />
                    </div>
                </div>
                <div className="mt-4 row justify-content-center">
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

const withConnect = connect(mapStateToProps, { getUsers })

export default compose(
	injectReducer({ key: 'userList', reducer }),
	injectSaga({ key: 'userList', saga }),
	withConnect
)(UserList)