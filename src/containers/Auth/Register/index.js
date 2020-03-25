import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link as LinkTo } from 'react-router-dom'
import AuthLayout from 'components/layout/auth'
import { AuthCard } from '../styled'
import { Button } from 'components/button'
import { Input } from 'components/input'
import { colors } from 'style/variable'
import { rem } from 'utils/common'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { CardTitle, Fieldset } from '../styled'
import { FormAlert } from 'components/alerts'
import queryString from 'query-string'
import { Preloader } from 'components/preloader'

const FieldsetCustom = styled(Fieldset)`
	margin-bottom: ${rem(18)};
`
const ButtonWrap = styled.div`
	margin-bottom: ${rem(40)};
`
const LinkToLogin = styled(LinkTo)`
	margin-bottom: ${rem(20)};
	font-size: ${rem(12)};
	display: inline-block;
	color: ${colors.grayDark};
	text-decoration: none;
`
const CardDescription = styled.div`
	text-align: center;
	color: ${colors.color11};
	font-size: ${rem(10)};
	display: inline-block;
	line-height: 1.5;
	max-width: ${rem(300)};
`
const SmallLink = styled(LinkTo)`
	color: ${colors.color11};
	display: inline-block;
	margin: 0 ${rem(5)};
	text-decoration: underline;
`

const Register = ({ accountCreate, onSubmit, location, isLoading }) => {
	const [state, setState] = useState({ confirm: null })
	const AccountConfirm = false
	useEffect(() => {
		const query = queryString.parse(location.search)
		setState({
			...query,
		})
	}, [])

	if (isLoading) {
		return (
			<AuthLayout>
				<AuthCard>
					<Preloader />
				</AuthCard>
			</AuthLayout>
		)
	}

	if (AccountConfirm) {
		return (
			<AuthLayout>
				<AuthCard>
					<FormAlert
						illustrationIcon='illustrationMail'
						title='You have successfully confirmed your email.'
						description='Please login and enjoy it'
						linkName='Log In'
						linkHref='/auth/login'
					/>
				</AuthCard>
			</AuthLayout>
		)
	}

	if (accountCreate) {
		return (
			<AuthLayout>
				<AuthCard>
					<FormAlert
						illustrationIcon='illustrationChecked'
						title='Your account has been created!'
						description='We have sent you an email with the confirmation link. Please go to
							your email inbox and confirm registration.'
						btnName='Re-send the email'
					/>
				</AuthCard>
			</AuthLayout>
		)
	}

	return (
		<Formik
			initialValues={{
				fname: '',
				lname: '',
				email: '',
				password: '',
			}}
			validationSchema={Yup.object({
				fname: Yup.string().required('Required'),
				lname: Yup.string().required('Required'),
				email: Yup.string()
					.email('Email invalid')
					.required('Required'),
				password: Yup.string()
					.required('Required')
					.min(8, 'min 8 symbol'),
			})}
			onSubmit={(values, { resetForm }) => {
				onSubmit(values)
				resetForm()
			}}
		>
			{({ isValid }) => (
				<Form>
					<AuthLayout>
						<AuthCard>
							<div className='w-100'>
								<CardTitle>Registration</CardTitle>
								<FieldsetCustom>
									<Input
										theme='primary'
										label='First Name'
										placeholder='Type Here...'
										type='text'
										name='fname'
									/>
									<Input
										theme='primary'
										label='Last Name'
										placeholder='Type Here...'
										type='text'
										name='lname'
									/>
									<Input
										theme='primary'
										label='Email Address'
										placeholder='Type Here...'
										type='email'
										name='email'
									/>
									<Input
										theme='primary'
										label='Password'
										placeholder='Type Here...'
										type='password'
										name='password'
									/>
								</FieldsetCustom>
								<ButtonWrap className='text-center'>
									<Button theme='primary' type='submit' disabled={!isValid} big>
										Create an Account
									</Button>
								</ButtonWrap>
								<div className='text-center'>
									<LinkToLogin to='/auth/login'>
										Already have an account? >
									</LinkToLogin>
									<CardDescription>
										By signing up, I agree with the AutomatedAMZ
										<SmallLink to='google.com'> Privacy Policy</SmallLink>
										and
										<SmallLink to='google.com'>Terms of Service</SmallLink>.
									</CardDescription>
								</div>
							</div>
						</AuthCard>
					</AuthLayout>
				</Form>
			)}
		</Formik>
	)
}

export default Register
