import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const Preloader = () => (
	<Wrap className='lds-roller'>
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</Wrap>
)
