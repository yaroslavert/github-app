import React, { memo } from 'react'
import styled from 'styled-components'
import { colors } from 'style/variable'
import { useLocation } from 'react-router-dom'
import AvatarMini from './components/avatar-mini'
import UpgradeButton from './components/upgrade-button'
import { rem } from 'utils/common'

const HeaderWrap = styled.header`
	background-color: ${colors.color12};
	color: ${colors.gray2};
	border-bottom: 1px solid rgba(149, 152, 180, 0.2);
	padding: ${rem(24)};
`
const Text = styled.div`
	font-size: ${rem(9)};
	line-height: ${rem(13)};
`

export default memo(() => {
	const { pathname } = useLocation()
	let title
	switch (pathname) {
		case '/listing':
			title = 'Listings'
			break
		case '/repricer':
			title = 'Repricer settings'
			break
		case '/settings':
			title = 'General settings'
			break
		default:
			title = 'Listing'
	}
	return (
		<HeaderWrap className='d-flex align-items-center justify-content-between'>
			<Text>Active marketplace</Text>
			<div className='text-center text-uppercase'>{title}</div>
			<div className='d-flex align-items-center'>
				<UpgradeButton />
				<AvatarMini />
			</div>
		</HeaderWrap>
	)
})
