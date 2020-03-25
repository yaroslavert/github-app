import React, { memo } from 'react'
import styled from 'styled-components'
import { colors } from 'style/variable'
import { Link as NativeLink } from 'react-router-dom'
import { rem } from 'utils/common'

const Text = styled.div`
	color: ${colors.blueLightHover};
	font-weight: 500;
	line-height: ${rem(17)};
	font-size: ${rem(12)};
	text-align: right;
	margin-right: ${rem(12)};
`

const Link = styled(NativeLink)`
	color: white;
	font-weight: 500;
	background-color: ${colors.blueLight};
	border-radius: 4px;
	font-size: ${rem(12)};
	line-height: ${rem(18)};
	padding: ${rem(6)} ${rem(10)};
	&:hover {
		background-color: ${colors.blueLightHover};
	}
`

export default memo(props => {
	return (
		<div className='d-flex align-items-center'>
			<Text>
				Your trial version
				<br /> expires in 2 day(s).
			</Text>
			<Link to='/auth'>Upgrade</Link>
		</div>
	)
})
