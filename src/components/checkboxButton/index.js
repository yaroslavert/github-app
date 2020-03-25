import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from 'style/variable'
import { rem } from 'utils/common'

const CheckboxStyled = styled.label`
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
    &::before, 
    &::after{
        content: '';
        display: inline-block;
        position: relative;
        vertical-align: middle;
        transition: all .3s;
    }
    &::before {
		background-color: ${props =>
			props.theme === 'grid' ? 'transparent' : `${colors.white}`};
    }
    &::after{
        position: absolute;
        opacity: 0;
        transform: rotate(-49deg);
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
			props.theme === 'grid' &&
			css`
				color: ${colors.gray2};
			`}

    ${props =>
			props.size === 'default' &&
			css`
				font-weight: 500;
				font-size: ${rem(13)};
				&::before,
				&::after {
					width: ${rem(16)};
					height: ${rem(16)};
				}
				&::before {
					border-radius: ${rem(4)};
					margin-right: ${rem(10)};
					border: ${props.theme === 'grid'
						? `${rem(1)} solid ${colors.gray2}`
						: `${rem(3)} solid ${colors.color13}`};
				}
				&::after {
					left: ${rem(3)};
					top: ${rem(2)};
					width: ${rem(10)};
					height: ${rem(5)};
					border-bottom: ${rem(2)} solid ${colors.white};
					border-left: ${rem(2)} solid ${colors.white};
				}
			`}
    
    ${props =>
			props.size === 'small' &&
			css`
				font-weight: 400;
				font-size: ${rem(10)};
				&::before,
				&::after {
					width: ${rem(12)};
					height: ${rem(12)};
				}
				&::before {
					border-radius: ${rem(2)};
					margin-right: ${rem(6)};
					border: ${rem(1)} solid ${colors.color13};
					transform: translateY(${rem(-1)});
				}
				&::after {
					left: ${rem(3)};
					top: ${rem(3)};
					width: ${rem(7)};
					height: ${rem(3)};
					border-bottom: ${rem(1)} solid ${colors.white};
					border-left: ${rem(1)} solid ${colors.white};
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
        &::after {
            opacity: 0;
        }
    }
    &:checked + span {
        &::after{
            opacity: 1;
        }
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
							border-color: ${colors.color14};
						}
					`}
        
        ${props =>
					props.color === 'blue' &&
					css`
						&::before {
							background-color: ${colors.blueLightHover};
							border-color: ${colors.blueLightHover};
						}
					`}
    
        ${props =>
					props.size === 'default' &&
					css`
						&::after {
							top: ${rem(7)};
						}
					`}
        
        ${props =>
					props.size === 'small' &&
					css`
						&::after {
							top: ${rem(7)};
						}
					`}
    }
`

const Checkbox = React.memo(({ children, theme, color, size, ...rest }) => (
	<CheckboxStyled>
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
	</CheckboxStyled>
))

Checkbox.defaultProps = {
	theme: 'primary',
	color: 'green',
	size: 'default',
}

export default Checkbox
