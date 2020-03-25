import React from 'react'
import Icon from 'components/icon'
import { Button } from 'components/button'
import { Input, InputSmall } from 'components/input'
import Checkbox from 'components/checkboxButton'
import RadioButton from 'components/radioButton'
import ToggleButton from 'components/toggleButton'
import { AuthCard } from '../styled'
import AuthLayout from 'components/layout/auth'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { Link as LinkTo } from 'react-router-dom'
import { colors } from 'style/variable'
import { CardTitle, Fieldset } from '../styled'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const LinkWrap = styled.div`
	text-align: right;
	margin-bottom: ${rem(70)};
`
const LinkForgot = styled(LinkTo)`
	font-size: ${rem(10)};
	display: inline-block;
	color: ${colors.color11};
	text-decoration: none;
`

const Login = props => {
	const handleInput = val => {
		console.log(val)
	}
	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('Email invalid')
						.required('Required'),
					password: Yup.string()
						.required('Required')
						.min(8, 'min 8 symbol'),
				})}
				onSubmit={(values, { resetForm }) => {
					props.onSubmit(values)
					resetForm()
				}}
			>
				<Form>
					<AuthLayout>
						<AuthCard>
							<div className='w-100'>
								<CardTitle>Log In</CardTitle>
								<Fieldset>
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
								</Fieldset>
								<LinkWrap>
									<LinkForgot to='/auth/reset-password'>
										Forgot your password?
									</LinkForgot>
								</LinkWrap>
								<div className='text-center'>
									<Button theme='primary' type='submit' big>
										Log In
									</Button>
								</div>
							</div>
						</AuthCard>
					</AuthLayout>
				</Form>
			</Formik>

			{/*<div className='container'>
				Login Page
				<div>
					<Button disabled>
						<Icon component='checked' />
						Save
					</Button>
					<Button theme='primary'>
						<Icon component='checked' />
						Save
					</Button>
					<Button theme='primary' big disabled>
						Create Account
					</Button>
					<Button theme='primary' big>
						Create Account
					</Button>
					<Button theme='circle'>
						<Icon component='pencilCreate' />
					</Button>
					<Button theme='cancel'>
						<Icon component='close' />
						Cancel
					</Button>
				</div>
				<br />
				<br />
				<div>
					<InputSmall
						small
						theme='primary'
						type='text'
						value='5'
						onChange={e => handleInput(e.target.value)}
					/>
				</div>
				<br />
				<br />
				<div>
					<Checkbox disabled>Amazon</Checkbox>
					<Checkbox>Amazon</Checkbox>
					<Checkbox size='small' disabled>
						Amazon
					</Checkbox>
					<Checkbox size='small'>Amazon</Checkbox>
				</div>
				<br />
				<div>
					<Checkbox color='blue'>Amazon</Checkbox>
					<Checkbox color='blue'>Amazon</Checkbox>
					<Checkbox color='blue' size='small'>
						Amazon
					</Checkbox>
					<Checkbox color='blue' size='small'>
						Amazon
					</Checkbox>
				</div>
				<br />
				<div
					style={{
						padding: 15 + 'px',
						background: 'linear-gradient(180deg, #14263C 0%, #A9898B 100%)',
					}}
				>
					<Checkbox theme='dark' color='blue'>
						Amazon
					</Checkbox>
					<Checkbox theme='dark'>Amazon</Checkbox>
					<Checkbox theme='dark' color='blue' size='small'>
						Amazon
					</Checkbox>
					<Checkbox theme='dark' size='small'>
						Amazon
					</Checkbox>
				</div>
				<br />
				<br />
				<div>
					<RadioButton name='group1' disabled>
						Amazon
					</RadioButton>
					<RadioButton name='group1'>Amazon</RadioButton>
					<RadioButton name='group1' size='small' disabled>
						Amazon
					</RadioButton>
					<RadioButton name='group1' size='small'>
						Amazon
					</RadioButton>
				</div>
				<br />
				<div>
					<RadioButton name='group2' color='blue'>
						Amazon
					</RadioButton>
					<RadioButton name='group2' color='blue'>
						Amazon
					</RadioButton>
					<RadioButton name='group2' color='blue' size='small'>
						Amazon
					</RadioButton>
					<RadioButton name='group2' color='blue' size='small'>
						Amazon
					</RadioButton>
				</div>
				<br />
				<div
					style={{
						padding: 15 + 'px',
						background: 'linear-gradient(180deg, #14263C 0%, #A9898B 100%)',
					}}
				>
					<RadioButton name='group3' theme='dark' color='blue'>
						Amazon
					</RadioButton>
					<RadioButton name='group3' theme='dark'>
						Amazon
					</RadioButton>
					<RadioButton name='group3' theme='dark' color='blue' size='small'>
						Amazon
					</RadioButton>
					<RadioButton name='group3' theme='dark' size='small'>
						Amazon
					</RadioButton>
				</div>
				<br />
				<br />
				<div style={{ display: 'flex' }}>
					<ToggleButton disabled>Amazon</ToggleButton>
					<ToggleButton>Amazon</ToggleButton>
				</div>
				<br />
				<div style={{ display: 'flex' }}>
					<ToggleButton color='blue'>Amazon</ToggleButton>
					<ToggleButton color='blue'>Amazon</ToggleButton>
				</div>
				<br />
				<div
					style={{
						display: 'flex',
						padding: 15 + 'px',
						background: 'linear-gradient(180deg, #14263C 0%, #A9898B 100%)',
					}}
				>
					<ToggleButton theme='dark' color='blue'>
						Amazon
					</ToggleButton>
					<ToggleButton theme='dark'>Amazon</ToggleButton>
				</div>
				<br />
				<br />
			</div>*/}
		</>
	)
}

export default Login
