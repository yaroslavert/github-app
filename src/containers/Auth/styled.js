import React from 'react'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { colors } from 'style/variable'

const CardTitle = styled.h2`
	text-align: center;
	font-weight: 600;
	font-size: ${rem(24)};
	margin-bottom: ${rem(40)};
`
const CardSubTitle = styled.p`
	text-align: center;
	font-size: ${rem(12)};
	line-height: 1.5;
	margin: 0 0 ${rem(20)};
`
const AuthCard = styled.div`
	background: ${colors.white};
	box-shadow: ${rem(6)} ${rem(5)} ${rem(125)} rgba(0, 0, 0, 0.2);
	border-radius: ${rem(10)};
	padding: ${rem(60)} ${rem(90)} ${rem(50)};
	max-width: ${rem(510)};
	min-height: ${rem(610)};
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Fieldset = styled.fieldset`
	padding: 0;
	border: 0;
	box-shadow: none;
	& > label {
		margin-bottom: ${rem(12)};
	}
`

export { CardTitle, CardSubTitle, AuthCard, Fieldset }
