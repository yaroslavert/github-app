import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'style/variable'
import { rem } from 'utils/common'
import Icon from 'components/icon'

const SearchInput = styled.div`
	padding: ${rem(8)} ${rem(10)};
	border: 1px solid
		${props => (props.isFocus ? `${colors.color14}` : `${colors.color11}`)};
	background-color: #ffffff;
	width: 100%;
	border-radius: ${rem(4)};
	svg {
		display: inline-block;
		min-width: ${rem(10)};
		margin-left: ${rem(-1)};
		background-color: #fff;
	}
	input {
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: ${rem(9)};
		line-height: 1.4;
	}
	${props =>
		props.length > 0 &&
		css`
			color: ${colors.grayDark};
		`}
`

export class CustomFilter extends Component {
	state = {
		value: '',
	}

	onChange = event => {
		let newValue = event.target.value
		if (this.state.value !== newValue) {
			this.setState(
				{
					value: newValue,
				},
				() => {
					this.props.parentFilterInstance(function(instance) {
						instance.onFloatingFilterChanged('contains', newValue)
					})
				}
			)
		}
	}

	onParentModelChanged = parentModel => {
		// note that the filter could be anything here, but our purposes we're assuming a greater than filter only,
		// so just read off the value and use that
		this.setState({
			value: !parentModel ? '' : parentModel.filter,
		})
	}

	render() {
		const isFocus = this.state.value.length > 0
		return (
			<SearchInput className='d-flex align-items-center' isFocus={isFocus}>
				<input
					type='text'
					value={this.state.value}
					onChange={this.onChange}
					onFocus={this.onFocus}
					placeholder='Search'
					className='border-0'
				/>
				<Icon component='search' />
			</SearchInput>
		)
	}
}
