import React from 'react'
import { Button } from 'components/button'
import { Input } from 'components/input'
import { AuthCard } from '../styled'
import AuthLayout from 'components/layout/auth'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { CardTitle, CardSubTitle, Fieldset } from '../styled'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormAlert } from 'components/alerts'
import { Preloader } from 'components/preloader'
import clsx from 'clsx'

const FieldsetCustom = styled(Fieldset)`
	margin-bottom: ${rem(88)};
`

const ResetPassword = ({ onSubmit, passwordResetMessage, isLoading }) => {
	if (isLoading) {
		return (
			<AuthLayout>
				<AuthCard>
					<Preloader />
				</AuthCard>
			</AuthLayout>
		)
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(e)
	}
	const showMessage = clsx('w-100', passwordResetMessage && 'd-none')
	const hideMessage = clsx('w-100', !passwordResetMessage && 'd-none')
	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={Yup.object({
				email: Yup.string()
					.email('Email invalid')
					.required('Required'),
			})}
			onSubmit={(values, { resetForm }) => {
				onSubmit(values)
				resetForm({})
			}}
		>
			{({ isValid }) => (
				<Form onSubmit={event => handleSubmit(event)}>
					<AuthLayout>
						<AuthCard>
							<div className={hideMessage}>
								<FormAlert
									illustrationIcon='illustrationMail'
									title='Please go to your email inbox.'
									description=' We have sent you an email with the confirmation link.'
									btnName='Re-send the email'
									onClick={handleSubmit}
								/>
							</div>
							<div className={showMessage}>
								<CardTitle>Password recovery</CardTitle>
								<CardSubTitle>
									To verify it's your account, please write down your email.
								</CardSubTitle>
								<FieldsetCustom>
									<Input
										theme='primary'
										label='Email Address'
										placeholder='Type Here...'
										type='email'
										name='email'
									/>
								</FieldsetCustom>
								<div className='text-center'>
									<Button theme='primary' type='submit' disabled={!isValid} big>
										Send an email
									</Button>
								</div>
							</div>
						</AuthCard>
					</AuthLayout>
				</Form>
			)}
		</Formik>
	)
}

export default ResetPassword
