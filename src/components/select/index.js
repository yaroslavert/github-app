import React from 'react'
import Select, { components } from 'react-select'
import Icon from 'components/icon'
import { colors, fonts } from 'style/variable'
import { rem } from 'utils/common'

const DropdownIndicator = props =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props}>
			<Icon component='arrowDown' />
		</components.DropdownIndicator>
	)

const controlStyles = {
	position: 'absolute',
	top: rem(8),
	left: rem(16),
	fontSize: rem(10),
	width: '100%',
}

const ControlComponent = props => {
	return (
		<>
			{<label style={controlStyles}>{props.selectProps.label}</label>}
			<components.Control {...props} />
		</>
	)
}

const customStyles = {
	container: (provided, state) => ({
		position: 'relative',
		width: '100%',
		borderRadius: rem(5),
		backgroundColor: state.isDisabled ? colors.white : colors.white,
	}),
	control: (provided, state) => ({
		backgroundColor: state.isDisabled ? colors.white : colors.white,
		boxShadow: state.menuIsOpen
			? '-2px 7px 15px rgba(0, 0, 0, 0.05)'
			: '-2px 7px 15px rgba(0, 0, 0, 0)',
		borderColor: state.isFocused ? colors.color13 : colors.color13,
		borderStyle: 'solid',
		borderWidth: rem(1),
		display: 'flex',
		position: 'relative',
		borderRadius: rem(5),
		minWidth: '100px',
		zIndex: 5,
		flexWrap: 'wrap',
		minHeight: rem(22),
		fontFamily: fonts.Poppins,
		paddingTop: rem(4),
		paddingRight: rem(6),
		paddingBottom: rem(4),
		paddingLeft: rem(10),
		justifyContent: 'space-between',
		transition: 'all 0.15s',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	indicatorsContainer: (provided, state) => ({
		...provided,
		position: 'relative',
		'& > div': {
			padding: 0,
			paddingTop: rem(2),
		},
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
	}),
	placeholder: (provided, state) => ({
		...provided,
		fontSize: rem(10),
		color: colors.grayDark,
		margin: 0,
		padding: 0,
	}),
	singleValue: (provided, state) => ({
		...provided,
		fontSize: rem(10),
		color: colors.grayDark,
		margin: 0,
		padding: 0,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		fontSize: rem(10),
		margin: 0,
		color: colors.grayDark,
		padding: 0,
	}),
	menu: (provided, state) => ({
		backgroundColor: colors.color8,
		boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
		borderRadius: rem(5),
		position: 'absolute',
		top: '100%',
		left: '0',
		right: '0',
		transform: 'translateY(-5px)',
		zIndex: 1,
	}),
	menuList: (provided, state) => ({
		WebkitOverflowScrolling: 'touch',
		maxHeight: 200,
		overflowY: 'auto',
		padding: 0,
		paddingTop: rem(8),
	}),
	option: (provided, state) => ({
		WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
		cursor: 'pointer',
		display: 'block',
		color: colors.grayDark,
		fontSize: rem(10),
		fontFamily: fonts.Poppins,
		lineHeight: '1.2',
		paddingTop: rem(3),
		paddingRight: rem(7),
		paddingBottom: rem(3),
		paddingLeft: rem(7),
		borderRadius: 'none',
		whiteSpace: 'noWrap',
		userSelect: 'none',
		width: '100%',
		transition: 'all 0.15s',
		'&:hover': {
			backgroundColor: colors.color9,
		},
	}),
}

const SingleSelect = React.memo(props => {
	const { defaultValue } = props
	return (
		<>
			<Select
				{...props}
				isClearable={false}
				isSearchable={false}
				styles={customStyles}
				defaultValue={defaultValue}
				components={{ DropdownIndicator, Control: ControlComponent }}
			/>
		</>
	)
})

SingleSelect.defaultProps = {
	options: [],
}

export { SingleSelect }
