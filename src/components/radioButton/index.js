import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from 'style/variable'
import { rem } from 'utils/common'

const RadioButtonStyled = styled.label`
	outline: none;
	cursor: pointer;
	transition: all 0.3s;
	display: inline-block;
	position: relative;
`
const TextStyled = styled.span`
    vertical-align: middle;
    display: inline-block;
    font-family: ${fonts.Poppins};
    transition: all .3s;
    user-select: none;
    text-indent: ${rem(-20)};
	padding-left: ${rem(20)};
	line-height: 1.4;
    &::before{
        content: '';
        display: inline-block;
        position: relative;
        vertical-align: middle;
        transition: all .3s;
        background-color: ${colors.white};
        border-radius: 50%;
        transform: translateY(${rem(-1)});
    }
    ${props =>
			props.theme === 'primary' &&
			css`
				color: ${colors.grayDark};
			`}
    
    ${props =>
			props.theme === 'dark' &&
			css`
				color: ${colors.color13};
			`}

    ${props =>
			props.size === 'default' &&
			css`
				font-weight: 500;
				font-size: ${rem(13)};
				&::before {
					width: ${rem(14)};
					height: ${rem(14)};
					margin-right: ${rem(6)};
					border: ${rem(2)} solid ${colors.color13};
				}
			`}
    
    ${props =>
			props.size === 'small' &&
			css`
				font-weight: 400;
				font-size: ${rem(10)};
				&::before {
					width: ${rem(12)};
					height: ${rem(12)};
					margin-right: ${rem(6)};
					border: ${rem(1)} solid ${colors.color13};
				}
			`}
`
const InputStyle = styled.input`
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
    top: 100%;
    left: ${rem(7)};
    &:disabled + span {
        cursor: none;
        opacity: .7;
        &::before{
            border-width: ${rem(1)};
        }
    }
    &:checked + span {
        ${props =>
					props.theme === 'primary' &&
					css`
						color: ${colors.color12};
					`}
        
        ${props =>
					props.theme === 'dark' &&
					css`
						color: ${colors.color13};
					`}
    
        ${props =>
					props.color === 'green' &&
					css`
						&::before {
							border-color: ${colors.color14};
						}
					`}
        
        ${props =>
					props.color === 'blue' &&
					css`
						&::before {
							border-color: ${colors.blueLightHover};
						}
					`}
        
        ${props =>
					props.size === 'default' &&
					css`
						&::before {
							border-width: ${rem(4)};
						}
					`}
    
        ${props =>
					props.size === 'small' &&
					css`
						&::before {
							border-width: ${rem(3)};
						}
					`}
    }
`

const RadioButton = React.memo(({ children, theme, color, size, ...rest }) => (
	<RadioButtonStyled>
		<InputStyle
			theme={theme}
			size={size}
			color={color}
			{...rest}
			type='radio'
		/>
		<TextStyled theme={theme} size={size} color={color}>
			{children}
		</TextStyled>
	</RadioButtonStyled>
))

RadioButton.defaultProps = {
	theme: 'primary',
	color: 'green',
	size: 'default',
}

export default RadioButton
