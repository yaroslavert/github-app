import React from 'react'
import { Button } from 'components/button'
import { Input } from 'components/input'
import { AuthCard } from '../styled'
import AuthLayout from 'components/layout/auth'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { CardTitle, Fieldset } from '../styled'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormAlert } from 'components/alerts'
import queryString from 'query-string'
import { Preloader } from 'components/preloader'

const FieldsetCustom = styled(Fieldset)`
	margin-bottom: ${rem(88)};
`

const RestorePassword = ({
	onSubmit,
	passwordRestoreMessage,
	location,
	isLoading,
}) => {
	const query = queryString.parse(location.search)

	if (isLoading) {
		return (
			<AuthLayout>
				<AuthCard>
					<Preloader />
				</AuthCard>
			</AuthLayout>
		)
	}

	if (passwordRestoreMessage) {
		return (
			<AuthLayout>
				<AuthCard>
					<FormAlert
						illustrationIcon='illustrationMail'
						title='Your password has been saved. Keep it safe!'
						linkName='OK'
						linkHref='/auth/login'
					/>
				</AuthCard>
			</AuthLayout>
		)
	}
	return (
		<Formik
			initialValues={{
				confirmPassword: '',
				password: '',
			}}
			validationSchema={Yup.object({
				password: Yup.string()
					.required('Required')
					.min(8, 'min 8 symbol')
					.test('passwords-match', 'Passwords do not match', function(value) {
						return this.parent.confirmPassword === value
					}),
				confirmPassword: Yup.string()
					.required('Required')
					.min(8, 'min 8 symbol'),
			})}
			onSubmit={(values, { resetForm }) => {
				const payload = {
					email: query.email,
					password: values.password,
					token: query.token,
				}
				onSubmit(payload)
				resetForm()
			}}
		>
			<Form>
				<AuthLayout>
					<AuthCard>
						<div className='w-100'>
							<CardTitle>Password recovery</CardTitle>
							<FieldsetCustom>
								<Input
									theme='primary'
									label='New Password'
									placeholder='Type Here...'
									type='password'
									name='confirmPassword'
								/>
								<Input
									theme='primary'
									label='Repeat Password'
									placeholder='Type Here...'
									type='password'
									name='password'
								/>
							</FieldsetCustom>
							<div className='text-center'>
								<Button theme='primary' type='submit' big>
									Save
								</Button>
							</div>
						</div>
					</AuthCard>
				</AuthLayout>
			</Form>
		</Formik>
	)
}

export default RestorePassword
