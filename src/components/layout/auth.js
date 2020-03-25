import React from 'react'
import styled from 'styled-components'
import { colors } from 'style/variable'
import authBg from 'containers/Auth/images/auth-bg.svg'
import { rem } from 'utils/common'

const AuthLayoutStyle = styled.div`
	position: relative;
	min-height: 100vh;
	background: ${colors.white} url(${authBg}) no-repeat center/cover;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${rem(25)} ${rem(30)};
`
const CenterContainer = styled.div`
	position: relative;
	max-width: ${rem(1170)};
	width: 100%;
	display: flex;
	justify-content: flex-end;
`

const AuthLayout = ({ children, ...props }) => {
	return (
		<AuthLayoutStyle {...props}>
			<CenterContainer>{children}</CenterContainer>
		</AuthLayoutStyle>
	)
}

export default AuthLayout
