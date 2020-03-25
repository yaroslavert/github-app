import React, { memo, useCallback } from 'react'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import styled, { ThemeProvider } from 'styled-components'
import { colors } from 'style/variable'
import { NavLink as NativeLink } from 'react-router-dom'
import Icon from 'components/icon'
import { makeSelectToggleSidebar } from './selectors'
import { updateSidebar } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import { rem } from 'utils/common'

const Logo = styled.div`
	background: linear-gradient(98.32deg, #34496b 0.76%, #223047 100%);
	box-shadow: 0px -2px 4px rgba(27, 78, 120, 0.31),
		3px 4px 20px rgba(34, 8, 8, 0.24);
	border-top-left-radius: ${props =>
		props.theme.sidebarState === 'full' ? `${rem(116)}` : 'none'};
	border-top-right-radius: ${rem(116)};
	border-bottom-left-radius: ${props =>
		props.theme.sidebarState === 'full' ? `${rem(116)}` : 'none'};
	border-bottom-right-radius: ${rem(116)};
	padding: ${props =>
		props.theme.sidebarState === 'full'
			? `${rem(12)} ${rem(29)}`
			: `${rem(19)} ${rem(0)}`};
	cursor: pointer;
	text-align: center;
	margin: ${props =>
		props.theme.sidebarState === 'full'
			? `${rem(0)} ${rem(30)}`
			: `${rem(0)} ${rem(-5)} ${rem(0)} ${rem(0)}`};
	position: relative;
`

const Link = styled(NativeLink)`
	padding: ${rem(20)};
	font-size: ${props =>
		props.theme.sidebarState === 'full' ? `${rem(13)}` : `${rem(0)}`};
	color: ${colors.gray2};
	svg {
		display: block;
		margin: ${props =>
			props.theme.sidebarState === 'full' ? `0 ${rem(23)} 0 0` : '0 auto'};
		transition: all 0.35s linear;
	}
	&.active {
		color: white;
		background: linear-gradient(98.32deg, #34496b 0.76%, #223047 100%);
		box-shadow: 0px -2px 4px rgba(27, 78, 120, 0.31),
			3px 4px 20px rgba(34, 8, 8, 0.24);
		border-top-left-radius: ${rem(35)};
		border-bottom-left-radius: ${rem(35)};
		svg {
			path {
				fill: white;
			}
		}
	}
`

const CloseSidebar = styled.button`
	cursor: pointer;
	position: absolute;
	bottom: ${rem(20)};
	right: ${rem(20)};
	svg {
		transition: all 0.35s linear;
		transform: ${props =>
			props.theme.sidebarState === 'full' ? 'rotate(90deg)' : 'rotate(270deg)'};
		path {
			fill: white;
		}
	}
`

const sidebarMenu = [
	{
		id: 1,
		pathname: '/listing',
		title: 'Listings',
		icon: 'listings',
	},
	{
		id: 2,
		pathname: '/repricer',
		title: 'Repricer settings',
		icon: 'repricersSettings',
	},
	{
		id: 3,
		pathname: '/settings',
		title: 'General settings',
		icon: 'generalSettings',
	},
]

function Sidebar() {
	const sidebarState = useSelector(makeSelectToggleSidebar())
	const dispatch = useDispatch()
	const toggleSidebar = useCallback(e => dispatch(updateSidebar(e)), [dispatch])
	const state = sidebarState === 'full' ? 'short' : 'full'
	const logoIcon = sidebarState === 'full' ? 'logo' : 'logoMini'

	return (
		<ThemeProvider theme={{ sidebarState }}>
			<Logo>
				<Icon component={logoIcon} />
			</Logo>
			<ul className='mt-3'>
				{sidebarMenu.map(item => (
					<li key={item.id} className='mb-1'>
						<Link
							to={item.pathname}
							className='d-flex text-uppercase align-items-center'
						>
							<Icon component={item.icon} />
							{item.title}
						</Link>
					</li>
				))}
			</ul>
			<CloseSidebar
				onClick={() => toggleSidebar(state)}
				className='bg-transparent border-0'
			>
				<Icon component='arrowDown' />
			</CloseSidebar>
		</ThemeProvider>
	)
}

export default compose(
	injectReducer({ key: 'sidebar', reducer }),
	memo
)(Sidebar)
