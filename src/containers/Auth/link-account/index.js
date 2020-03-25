import React, { Component } from 'react'
import AuthLayout from 'components/layout/auth'
import styled from 'styled-components'
import { AuthCard, CardSubTitle, CardTitle, Fieldset } from '../styled'
import { FormAlert } from 'components/alerts'
import { rem } from 'utils/common'
import RadioButton from 'components/radioButton'
import { Button } from 'components/button'
import { colors } from 'style/variable'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Input } from 'components/input'
import { Preloader } from 'components/preloader'

const AuthCardWrap = styled(AuthCard)`
	padding-left: ${rem(70)};
	padding-right: ${rem(70)};
`
const Title = styled(CardTitle)`
	margin-bottom: ${rem(10)};
`
const SubTitle = styled(CardSubTitle)`
	margin-bottom: ${rem(40)};
`
const RadioList = styled.ul`
	columns: 2;
	min-height: ${rem(280)};
	align-content: flex-start;
	margin: 0 0 ${rem(32)};
	& > li {
		margin-bottom: ${rem(10)};
	}
`
const Guide = styled.div`
	margin-bottom: ${rem(20)};
	& > div {
		margin-bottom: ${rem(10)};
	}
`
const GuideTitle = styled(CardTitle)`
	margin-bottom: ${rem(20)};
`
const GuideItem = styled.div`
	font-weight: 500;
	font-size: ${rem(12)};
	line-height: 1.8;
	color: ${colors.grayDark};
	a {
		color: ${colors.blueLight};
		text-decoration: underline;
	}
`
const FieldsetCustom = styled(Fieldset)`
	margin-bottom: ${rem(30)};
`
const DevInfo = styled.div`
	padding: ${rem(10)} 0 0;
	span {
		margin-left: ${rem(4)};
		font-weight: 500;
		color: ${colors.blueMiddle};
	}
`

export default class LinkAccount extends Component {
	state = {
		selectMarketplaceId: null,
		linkMySellerAccountCard: true,
		marketplaceListCard: false,
		allMarketplace: [],
		// allMarketplace: this.props.allMarketplace,
	}

	componentDidMount() {
		console.log('kkk2', this.props)
		this.props.getAllMarketplace()
	}
	onLinkMySellerAccount = () => {
		this.setState({
			linkMySellerAccountCard: false,
			marketplaceListCard: true,
		})
	}
	onMarketplaceList = () => {
		this.setState({
			marketplaceListCard: false,
		})
	}
	handleChangeMarketplaceId = value => {
		this.setState({
			selectMarketplaceId: value,
		})
	}
	render() {
		const {
			selectMarketplaceId,
			linkMySellerAccountCard,
			marketplaceListCard,
			allMarketplace,
		} = this.state
		const { isLoading, onSubmit, sellerConfirmMessage } = this.props

		if (isLoading) {
			return <Preloader />
		}
		if (linkMySellerAccountCard) {
			return (
				<FormAlert
					illustrationIcon='illustrationSettings'
					title='Welcome to Automated AMZ '
					description=' Here you can automate a lot of your business procesess working with Amazon. We hope that you will enjoy this experience!'
					warningDescription='Please make sure that all programs associated with repricing are switched off so that Automated AMZ will work properly.'
					btnName='Link my seller account'
					onClick={this.onLinkMySellerAccount}
				/>
			)
		}
		if (marketplaceListCard) {
			return (
				<div className='w-100'>
					<Title>Your first marketplace</Title>
					<SubTitle>
						You can always add or delete a marketplace through your personal
						account.
					</SubTitle>
					<RadioList>
						{allMarketplace.map(({ id, amzMarketplace, countryCode }) => {
							return (
								<li key={id}>
									<RadioButton
										name='marketplace_id'
										onChange={e =>
											this.handleChangeMarketplaceId(e.target.value)
										}
										value={id}
									>
										Amazon {amzMarketplace} ({countryCode})
									</RadioButton>
								</li>
							)
						})}
					</RadioList>
					<div className='text-center'>
						<Button
							theme='primary'
							big
							disabled={!selectMarketplaceId}
							onClick={() => this.onMarketplaceList()}
						>
							Confirm
						</Button>
					</div>
				</div>
			)
		}
		if (sellerConfirmMessage) {
			return (
				<FormAlert
					illustrationIcon='illustrationSettings'
					title='Link your account'
					description='Your account has been successfully linked.'
					linkName='Go to Automated AMZ'
					linkHref='/listing'
				/>
			)
		}
		return (
			<div className='w-100'>
				<GuideTitle>Link your account</GuideTitle>
				<Guide>
					<div>
						<GuideItem>
							1. <Link to='/auth/login'>Login here </Link> to your Amazon
							Marketplace Web Service (MWS).
						</GuideItem>
					</div>
					<div>
						<GuideItem>
							2. Once you're logged into Amazon, fill in the following info in
							the boxes below:.
							<DevInfo className='text-center'>
								<div>
									Developer's Name:
									<span>automatedAMZ</span>
								</div>
								<div>
									Developer's Account Number:
									<span>6736-5573-6394</span>
								</div>
							</DevInfo>
						</GuideItem>
					</div>
					<div>
						<GuideItem>
							3. Upon clicking the 'Next' button, accept the Terms and
							Conditions and copy/paste your Seller ID and Auth. Token in the
							boxes below.
						</GuideItem>
					</div>
				</Guide>
				<Formik
					initialValues={{
						sellerId: '',
						mwsAuthToken: '',
					}}
					validationSchema={Yup.object({
						sellerId: Yup.string().required('Required'),
						mwsAuthToken: Yup.string().required('Required'),
					})}
					onSubmit={(values, { resetForm }) => {
						const payload = {
							...values,
							marketplace_id: selectMarketplaceId,
						}
						onSubmit(payload)
						resetForm()
					}}
				>
					<Form>
						<div className='w-100'>
							<FieldsetCustom>
								<Input
									theme='primary'
									label='Seller ID *'
									placeholder='Type Here...'
									type='text'
									name='sellerId'
								/>
								<Input
									theme='primary'
									label='Auth. Token *'
									placeholder='Type Here...'
									type='text'
									name='mwsAuthToken'
								/>
							</FieldsetCustom>
							<div className='text-center'>
								<Button theme='primary' type='submit' big>
									Link Account
								</Button>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
		)
	}
}
