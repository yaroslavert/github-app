import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts } from 'style/variable'
import Icon from 'components/icon'
import { rem } from 'utils/common'
import { useField } from 'formik'

const InputGroup = styled.label`
	position: relative;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	input,
	textarea {
		border-radius: ${rem(5)};
		outline: none;
		display: block;
		height: ${rem(40)};
		font-size: ${rem(13)};
		font-family: ${fonts.Poppins};
		width: 100%;
		&::-webkit-input-placeholder {
			opacity: 1;
		}
		&::-moz-placeholder {
			opacity: 1;
		}
		&:-ms-input-placeholder {
			opacity: 1;
		}
		&:-moz-placeholder {
			opacity: 1;
		}
	}
`

const BeforeIcon = styled.div`
	transform: translateY(-50%);
	position: absolute;
	display: block;
	left: 0;
	padding: ${rem(5)} ${rem(5)} ${rem(5)} ${rem(8)};
	text-align: center;
	top: 50%;
	cursor: pointer;
	width: ${rem(30)};
	max-height: 100%;
	svg {
		display: inline-block;
	}
`

const AfterIcon = styled.div`
	transform: translateY(-50%);
	position: absolute;
	display: block;
	right: 0;
	top: 50%;
	cursor: pointer;
	padding: ${rem(5)} ${rem(8)} ${rem(5)} ${rem(2)};
	text-align: center;
	width: ${rem(30)};
	max-height: 100%;
	svg {
		display: inline-block;
	}
`
const LabelField = styled.div`
	display: block;
	font-size: ${rem(12)};
	line-height: 1.5;
	font-family: ${fonts.Poppins};

	${props =>
		props.theme === 'primary' &&
		css`
			color: ${colors.grayDark};
		`}
	${props =>
		props.theme === 'dark' &&
		css`
			color: ${colors.grayDark};
		`}
`
const InputContainer = styled.div`
	position: relative;
	display: block;
	width: 100%;
`

const InputField = styled.input`
    font-weight: 500;
    padding-left: ${rem(10)};
    
    ${props =>
			props.theme === 'primary' &&
			css`
				background-color: ${colors.color10};
				border: ${rem(1)} solid ${colors.gray};
				color: ${colors.color12};
				&::-webkit-input-placeholder {
					color: ${colors.color11};
					font-weight: 300;
				}
				&::-moz-placeholder {
					color: ${colors.color11};
					font-weight: 300;
				}
				&:-ms-input-placeholder {
					color: ${colors.color11};
					font-weight: 300;
				}
				&:-moz-placeholder {
					color: ${colors.color11};
					font-weight: 300;
				}
			`}
    ${props =>
			props.theme === 'dark' &&
			css`
				background: ${colors.blueMiddle};
				border: ${rem(1)} solid ${colors.blueMiddle};
				color: ${colors.white};
				&::-webkit-input-placeholder {
					color: ${colors.white};
				}
				&::-moz-placeholder {
					color: ${colors.white};
				}
				&:-ms-input-placeholder {
					color: ${colors.white};
				}
				&:-moz-placeholder {
					color: ${colors.white};
				}
			`}
    ${props =>
			props.small &&
			css`
				background-color: ${colors.white};
				border: ${rem(1)} solid ${colors.color13};
				border-radius: ${rem(5)};
				font-weight: 600;
				font-size: ${rem(12)};
				height: ${rem(18)};
				min-width: ${rem(36)};
				text-align: center;
				padding: 0 ${rem(5)};
				outline: none;
				font-family: ${fonts.Poppins};
			`}
    ${props =>
			props.beforeIcon &&
			css`
				padding-left: ${rem(30)};
			`}
    ${props =>
			props.afterIcon &&
			css`
				padding-right: ${rem(30)};
			`}
    ${props =>
			props.error &&
			css`
				border-color: ${colors.redLight};
			`}
`

const TextareaField = styled.textarea`
	padding: ${rem(12)} 0 0 ${rem(10)};
	font-weight: 400;
	min-height: ${rem(150)};
	max-height: ${rem(500)};
	resize: vertical;
	${props =>
		props.theme === 'primary' &&
		css`
			background: ${colors.color10};
			border: ${rem(1)} solid ${colors.gray};
			color: ${colors.color12};
			&::-webkit-input-placeholder {
				color: ${colors.color11};
				font-weight: 300;
			}
			&::-moz-placeholder {
				color: ${colors.color11};
				font-weight: 300;
			}
			&:-ms-input-placeholder {
				color: ${colors.color11};
				font-weight: 300;
			}
			&:-moz-placeholder {
				color: ${colors.color11};
				font-weight: 300;
			}
		`}
	${props =>
		props.theme === 'dark' &&
		css`
			background: ${colors.blueMiddle};
			border: ${rem(1)} solid ${colors.blueMiddle};
			color: ${colors.white};
			&::-webkit-input-placeholder {
				color: ${colors.white};
				font-weight: 300;
			}
			&::-moz-placeholder {
				color: ${colors.white};
				font-weight: 300;
			}
			&:-ms-input-placeholder {
				color: ${colors.white};
				font-weight: 300;
			}
			&:-moz-placeholder {
				color: ${colors.white};
				font-weight: 300;
			}
		`}
    ${props =>
			props.error &&
			css`
				border-color: ${colors.redLight};
			`}
`
const Error = styled.div`
	padding-top: ${rem(3)};
	font-size: ${rem(10)};
	color: ${colors.redLight};
`

const Input = memo(
	({
		children,
		label,
		value,
		beforeIcon,
		afterIcon,
		theme,
		iconLeftClick,
		iconRightClick,
		...rest
	}) => {
		const { type } = rest
		const [field, meta] = useField({ ...rest, type })
		return (
			<InputGroup>
				{label && <LabelField theme={theme}>{label}</LabelField>}
				{meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
				{type === 'textarea' ? (
					<TextareaField
						error={meta.touched && meta.error}
						{...field}
						theme={theme}
						value={value}
						{...rest}
					></TextareaField>
				) : (
					<InputContainer>
						{beforeIcon && (
							<BeforeIcon onClick={() => iconLeftClick}>
								<Icon component={beforeIcon} />
							</BeforeIcon>
						)}
						<InputField
							error={meta.touched && meta.error}
							beforeIcon={beforeIcon}
							afterIcon={afterIcon || meta.touched}
							theme={theme}
							{...field}
							{...rest}
						></InputField>
						{meta.touched && meta.error && (
							<AfterIcon onClick={() => iconRightClick}>
								<Icon fill={colors.redLight} component='close' />
							</AfterIcon>
						)}
						{meta.touched && !meta.error && (
							<AfterIcon onClick={() => iconRightClick}>
								<Icon component='verified' />
							</AfterIcon>
						)}
					</InputContainer>
				)}
			</InputGroup>
		)
	}
)

const InputSmall = memo(({ width = 36, ...rest }) => {
	return <InputField style={{ width: rem(width) }} {...rest}></InputField>
})

Input.defaultProps = {
	theme: 'primary',
	iconLeftClick: function() {},
	iconRightClick: function() {},
}

export { Input, InputSmall }
