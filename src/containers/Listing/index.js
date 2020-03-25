import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import Layout from 'components/layout/main'
import reducer from './reducer'
import saga from './saga'
import { makeSelectListing, makeSelectIsLoading } from './selectors'
import { getListing, updateListing } from './actions'
import AgGrid from 'components/agGrid'

class Listing extends PureComponent {
	componentDidMount() {
		this.props.getListing()
	}
	render() {
		const { list, isLoading } = this.props
		return (
			<Layout>
				<AgGrid isLoading={isLoading} rowData={list} />
			</Layout>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	list: makeSelectListing(),
	isLoading: makeSelectIsLoading(),
})

const withConnect = connect(mapStateToProps, { getListing, updateListing })

export default compose(
	injectReducer({ key: 'listing', reducer }),
	injectSaga({ key: 'listing', saga }),
	withConnect
)(Listing)
