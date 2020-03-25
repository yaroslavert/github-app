import styled, { keyframes } from 'styled-components'
import { colors } from 'style/variable'
import { rem } from 'utils/common'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Header = styled.div`
	background-color: ${colors.color12};
	padding: ${rem(12)} ${rem(10)};
`

const Rotate = styled.div`
	cursor: pointer;
	font-weight: 500;
	font-size: ${rem(12)};
	line-height: ${rem(18)};
	color: ${colors.gray2};
	-moz-user-select: none;
	-ms-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-webkit-touch-callout: none;
	svg {
		margin-right: ${rem(7)};
		path {
			fill: ${colors.gray2};
		}
	}
	&:active {
		color: #ffffff;
		svg {
			animation: ${rotate} 0.25s linear;
			path {
				fill: #ffffff;
			}
		}
	}
`

const Button = styled.button`
	cursor: pointer;
	padding: 0;
	cursor: pointer;
	background-color: transparent;
	border: none;
	svg {
		path {
			fill: ${props => (props.open ? '#ffffff' : `${colors.gray2}`)};
		}
	}
	&:active {
		svg {
			path {
				fill: #ffffff;
			}
		}
	}
`

const List = styled.ul`
	position: absolute;
	top: 100%;
	left: ${rem(-240)};
	z-index: 99;
	display: ${props => (props.open ? 'block' : 'none')};
	min-width: ${rem(240)};
	background: linear-gradient(90.95deg, #34496b 0.76%, #223047 100%);
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	border-radius: ${rem(5)};
`

const ListItem = styled.li`
	cursor: pointer;
	padding: ${rem(6)} ${rem(10)};
	svg {
		path {
			fill: ${colors.gray2};
		}
	}
	&:hover {
		background-color: ${colors.blue2};
		svg {
			path {
				fill: #fff;
			}
		}
		span {
			color: #ffffff;
		}
	}
	&:first-child {
		&:hover {
			border-top-left-radius: ${rem(5)};
			border-top-right-radius: ${rem(5)};
		}
	}
	&:last-child {
		&:hover {
			border-bottom-left-radius: ${rem(5)};
			border-bottom-right-radius: ${rem(5)};
		}
	}
	& > span {
		display: block;
		font-size: ${rem(13)};
		font-weight: 500;
		white-space: nowrap;
		margin-left: ${rem(10)};
		color: ${colors.gray2};
	}
	svg {
		width: ${rem(16)};
		height: ${rem(16)};
	}
`

export { Rotate, Header, Button, ListItem, List }
