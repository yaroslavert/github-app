import React, { memo } from 'react'
import Icon from 'components/icon'
import styled from 'styled-components'
import { rem } from 'utils/common'
import { Link as NativeLink } from 'react-router-dom'

const Name = styled.div`
	font-size: ${rem(12)};
`
const Photo = styled.div`
	width: 35px;
	height: 35px;
	background: rgba(149, 152, 180, 0.3);
	svg {
		width: 20px;
		height: 20px;
	}
`

export default memo(props => {
	return (
		<NativeLink className='d-flex align-items-center ml-5' to='/settings'>
			<Name className='text-white'>Alex Name</Name>
			<Photo className='rounded-circle overflow-hidden d-flex align-items-center justify-content-center ml-3'>
				<Icon component='avatar' />
			</Photo>
		</NativeLink>
	)
})
