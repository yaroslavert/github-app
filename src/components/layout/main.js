import React, { memo } from 'react'
import Sidebar from 'containers/Sidebar'
import Header from 'components/header'
import { colors } from 'style/variable'
import styled, { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { makeSelectToggleSidebar } from 'containers/Sidebar/selectors'
import { rem } from 'utils/common'

export const WrapLeft = styled.div`
	width: ${props => (props.theme.sidebarState === 'full' ? '220px' : '80px')};
	transition: all 0.15s linear;
	background: linear-gradient(180deg, #14263c 0%, #a9898b 100%);
	position: fixed;
	z-index: 2;
	height: 100vh;
	left: 0;
	background-color: ${colors.gray1};
	padding-top: ${rem(8)};
`

export const WrapRight = styled.div`
	width: ${props =>
		props.theme.sidebarState === 'full'
			? 'calc(100% - 220px)'
			: 'calc(100% - 80px)'};
	transition: all 0.15s linear;
	background: linear-gradient(180deg, #14263c 0%, #a9898b 94.12%);
	position: absolute;
	right: 0;
	height: 100%;
	z-index: 1;
`

export default memo(({ children }) => {
	const sidebarState = useSelector(makeSelectToggleSidebar())
	return (
		<ThemeProvider theme={{ sidebarState }}>
			<WrapLeft>
				<Sidebar />
			</WrapLeft>
			<WrapRight>
				<Header />
				{children}
			</WrapRight>
		</ThemeProvider>
	)
})
