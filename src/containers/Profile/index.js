import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import Layout from 'components/layout/main'
import { makeSelectUser, makeSelectIsLoading } from './selectors'
import { userUpdate, changePassword } from './actions'

class Profile extends PureComponent {
	render() {
		return <Layout>Profile</Layout>
	}
}

const mapStateToProps = createStructuredSelector({
	user: makeSelectUser(),
	isLoading: makeSelectIsLoading(),
})

const withConnect = connect(mapStateToProps, { userUpdate, changePassword })

export default compose(
	injectReducer({ key: 'profile', reducer }),
	injectSaga({ key: 'profile', saga }),
	withConnect
)(Profile)
