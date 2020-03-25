import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from 'style/variable'
import { rem } from 'utils/common'

const ToggleButtonStyled = styled.label`
	outline: none;
	cursor: pointer;
	transition: all 0.3s;
	display: flex;
	align-items: center;
	position: relative;
`
const TextStyled = styled.span`
    vertical-align: middle;
    display: inline-block;
    font-family: ${fonts.Poppins};
    transition: all .3s;
    user-select: none;
    &::before, 
    &::after{
        content: '';
        display: inline-block;
        position: relative;
        transition: all .3s;
        transform translateY(${rem(1)});
    }
    &::before{
        background-color: ${colors.color13};
    }
    &::after{
        position: absolute;
        background-color: ${colors.white};
        border-radius: 50%;
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
				font-size: ${rem(10)};
				&::before {
					width: ${rem(19)};
					height: ${rem(10)};
					border-radius: ${rem(10)};
					margin-right: ${rem(6)};
				}
				&::after {
					left: ${rem(1)};
					top: ${rem(1)};
					width: ${rem(8)};
					height: ${rem(8)};
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
							background-color: ${colors.color14};
						}
					`}
        
        ${props =>
					props.color === 'blue' &&
					css`
						&::before {
							background-color: ${colors.blueLightHover};
						}
					`}
    
        ${props =>
					props.size === 'default' &&
					css`
            &::after{
                transform translate(${rem(9)}, ${rem(1)});
            }
        `}
    }
`

const ToggleButton = React.memo(({ children, theme, color, size, ...rest }) => (
	<ToggleButtonStyled>
		<InputStyle
			theme={theme}
			size={size}
			color={color}
			{...rest}
			type='checkbox'
		/>
		<TextStyled theme={theme} size={size} color={color}>
			{children}
		</TextStyled>
	</ToggleButtonStyled>
))

ToggleButton.defaultProps = {
	theme: 'primary',
	color: 'green',
	size: 'default',
}

export default ToggleButton
