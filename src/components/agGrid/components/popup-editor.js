import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { colors } from 'style/variable'
import Icon from 'components/icon'

const List = styled.ul`
	background: linear-gradient(97.51deg, #34496b 0.76%, #223047 100%);
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 7px 0;
	list-style: none;
`

const ListItem = styled.li`
	color: ${colors.gray2};
	font-weight: 500;
	font-size: 13px;
	line-height: 19px;
	letter-spacing: 0.01em;
	transition: all 0.3s linear;
	padding: 5px 15px;
	cursor: pointer;
	display: flex;
	align-items: center;
	svg {
		margin-right: 10px;
		path {
			transition: all 0.3s linear;
			fill: ${colors.gray2};
		}
	}
	&:hover {
		background: ${colors.blue2};
		color: #ffffff;
		svg {
			path {
				fill: #fff;
			}
		}
	}
`

export class PopupEditor extends PureComponent {
	state = {
		value: this.props.value,
	}

	getValue = () => {
		return this.props.value
	}

	isPopup = () => {
		return true
	}

	render() {
		const { values } = this.props
		return (
			<List
				ref={this.containerRef}
				tabIndex={1} // important - without this the keypresses wont be caught
			>
				{values.map(item => (
					<ListItem key={item.id}>
						<Icon component={item.icon} />
						<span>{item.name}</span>
					</ListItem>
				))}
			</List>
		)
	}
}
