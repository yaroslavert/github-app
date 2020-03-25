import React, { PureComponent } from 'react'
import Icon from 'components/icon'
import { Button, ListItem, List } from '../style'

export class Dropdown extends PureComponent {
	static defaultProps = {
		list: [],
	}
	state = {
		isOpen: false,
		labelItem: null,
	}

	componentDidMount() {
		const { show, labelItem } = this.props
		this.setState({
			isOpen: show,
			labelItem,
		})
	}

	componentDidUpdate(prevProps) {
		if (prevProps.show !== this.props.show) {
			this.setState({
				isOpen: this.props.show,
			})
		}
	}

	showDropdown = () => {
		this.setState({ isOpen: true })
		document.addEventListener('click', this.hideDropdown)
	}

	hideDropdown = () => {
		this.setState({ isOpen: false })
		document.removeEventListener('click', this.hideDropdown)
	}

	renderDataDropDown = (item, index) => {
		const { toggleSettingModal } = this.props
		const { id, label, icon, func } = this.state.typeDropdown
			? { value: index, label: item }
			: item
		return (
			<ListItem
				key={id}
				className='d-flex align-items-center'
				onClick={() => toggleSettingModal(func)}
			>
				{icon && <Icon component={icon} />}
				<span>{label}</span>
			</ListItem>
		)
	}
	render() {
		const { list } = this.props
		return (
			<div className='position-relative'>
				<Button
					open={this.state.isOpen}
					type='button'
					onClick={this.showDropdown}
				>
					{this.state.labelItem}
				</Button>
				<List open={this.state.isOpen}>
					{list.map(this.renderDataDropDown)}
				</List>
			</div>
		)
	}
}
