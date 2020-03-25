import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from 'style/variable'
import { rem } from 'utils/common'
import { Link } from 'react-router-dom'

const ButtonStyled = styled.button`
    padding: ${rem(6)} ${rem(15)};
    font-family: ${fonts.Poppins};
    border-radius: ${rem(4)};
    font-size: ${rem(12)};
    border: 0;
	outline: none;
    color: ${colors.white};
    font-weight: 500;
    cursor: pointer;
    transition: all .3s;
    display: inline-block;
    &:disabled {
        color: ${colors.grayDark};
        background: ${colors.gray};
        cursor: none;
        &:hover {
            background: ${colors.gray};
            color: ${colors.grayDark};
            cursor: none;
        }
        svg {
            fill: ${colors.grayDark};
        }
    }
    svg {
        transition: all .3s;
        margin-right: ${rem(7)};
        display: inline-block;
        vertical-align: middle;
    }
    
    ${props =>
			props.theme === 'primary' &&
			css`
				background: ${colors.blueLight};
				&:hover {
					background: ${colors.blueLightHover};
					color: ${colors.white};
				}
				svg {
					fill: ${colors.white};
				}
				${props =>
					props.big &&
					css`
						padding: ${rem(11)} ${rem(20)};
					`}
			`}

    ${props =>
			props.theme === 'circle' &&
			css`
				background: ${colors.blue};
				width: ${rem(34)};
				height: ${rem(34)};
				border-radius: 50%;
				justify-content: center;
				padding: 0;
				box-shadow: 0 ${rem(2)} ${rem(10)} ${colors.shadowLight};
				&:hover {
					background: ${colors.blueLightHover};
				}
				svg {
					fill: ${colors.white};
					width: ${rem(16)};
					height: ${rem(16)};
					margin: 0;
				}
			`}

    ${props =>
			props.theme === 'cancel' &&
			css`
				background: ${colors.gray};
				color: ${colors.blueMiddle};
				padding: ${rem(6)} ${rem(10)};
				&:hover {
					background: ${colors.redLight};
					color: ${colors.white};
					svg {
						fill: ${colors.white};
					}
				}
				svg {
					fill: ${colors.blueMiddle};
					margin-bottom: ${rem(2)};
				}
			`}
`

const Button = React.memo(({ children, theme, ...rest }) => (
	<ButtonStyled theme={theme} {...rest}>
		{children}
	</ButtonStyled>
))
const ButtonLink = React.memo(({ children, theme, href, ...rest }) => (
	<ButtonStyled as={Link} theme={theme} to={href} {...rest}>
		{children}
	</ButtonStyled>
))

Button.defaultProps = {
	theme: 'primary',
}
ButtonLink.defaultProps = {
	theme: 'primary',
}

export { Button, ButtonLink }
