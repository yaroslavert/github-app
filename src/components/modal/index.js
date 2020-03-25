import React, { PureComponent } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import Icon from 'components/icon'
import { colors, fonts } from 'style/variable'
import clsx from 'clsx'
import { rem } from 'utils/common'

const Wrap = styled.div`
	min-width: ${props =>
		props.mode === 'small' ? `${rem(350)}` : `${rem(540)}`};
	border-radius: ${rem(4)};
	position: relative;
`

const Close = styled.div`
	cursor: pointer;
	position: absolute;
	right: ${rem(-30)};
	top: ${rem(-30)};
	svg {
		max-width: ${rem(12)};
		fill: ${colors.blue};
	}
`

const TopModal = styled.div`
	background-color: ${colors.color12};
	font-family: ${fonts.Poppins};
	padding: ${rem(11)} ${rem(24)};
	border-radius: ${rem(4)} ${rem(4)} 0 0;
	font-size: ${rem(16)};
	line-height: ${rem(24)};
	color: ${colors.color13};
`

export default class Modal extends PureComponent {
	static defaultProps = {
		isOpen: true,
		onClose() {},
	}

	state = {
		close: false,
	}

	componentDidUpdate(prevProps) {
		if (this.props.isOpen !== prevProps.isOpen) {
			this.setState({ isOpen: this.props.isOpen })
		}
		this.props.isOpen
			? this.setState({ close: false })
			: this.setState({ close: true })
	}

	render() {
		const { close } = this.state
		const { isOpen, onClose, children, title, mode } = this.props
		const className = clsx('modal-window', close && 'close')
		return (
			<ReactModal
				isOpen={isOpen}
				ariaHideApp={false}
				closeTimeoutMS={300}
				onRequestClose={onClose}
				shouldCloseOnOverlayClick={false}
				shouldCloseOnEsc={true}
				className={className}
				overlayClassName='modal-window-overlay'
			>
				<Wrap mode={mode}>
					<TopModal className='d-flex align-items-center'>
						<div className='text-center'>{title}</div>
						<Close onClick={() => onClose()}>
							<Icon component='close' />
						</Close>
					</TopModal>
					{children}
				</Wrap>
			</ReactModal>
		)
	}
}
