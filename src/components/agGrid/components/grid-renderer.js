import React from 'react'
import styled from 'styled-components'
import { colors } from 'style/variable'
import { rem } from 'utils/common'

const Wrap = styled.div`
	&:hover {
		background-color: ${colors.blue3};
	}
`

const Span = styled.span`
	color: ${colors.blueLight};
	font-size: ${rem(21)};
	padding: 0 ${rem(4)};
	cursor: pointer;
	&:hover {
		background-color: ${colors.blueLightHover};
		color: #fff;
	}
`

const CustomLink = styled.span`
	color: ${colors.blue4};
	font-weight: 500;
`

export function GridRenderer(props) {
	return (
		<Wrap className='d-flex justify-space-between position-relative'>
			<CustomLink
				href={props.value.link}
				target='_blank'
				rel='noopener noreferrer'
			>
				{props.value.name}
			</CustomLink>
			<Span>&#8942;</Span>
		</Wrap>
	)
}
