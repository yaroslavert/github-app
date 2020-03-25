import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'style/variable'
import { rem } from 'utils/common'
import Icon from 'components/icon'
import { Button, ButtonLink } from 'components/button'

const ModalTitle = styled.h3`
	font-size: ${rem(18)};
	font-weight: 600;
	color: ${colors.color12};
	line-height: 1.2;
`
const Title = styled.h3`
	font-size: ${rem(18)};
	color: ${colors.color12};
	font-weight: 600;
	line-height: 1.5;
	margin: ${rem(20)} 0 0;
`
const Description = styled.p`
	line-height: 1.5;
	font-size: ${rem(12)};
	color: ${colors.color12};
	padding: ${rem(10)} 0;
`
const WarningText = styled.p`
	line-height: 1.5;
	font-size: ${rem(10)};
	color: ${colors.redLight};
	font-weight: 500;
	margin: 0 0 ${rem(25)};
`
const ButtonWrap = styled.div`
	padding: ${rem(50)} 0 ${rem(20)};
	${props =>
		props.warningDescription &&
		css`
			padding: 0 0 ${rem(20)};
		`}
`
const FormAlert = ({
	modalTitle,
	illustrationIcon,
	title,
	description,
	warningDescription,
	btnName,
	linkName,
	linkHref,

	onClick,
}) => {
	return (
		<div className='w-100 text-center'>
			{modalTitle && <ModalTitle>{modalTitle}</ModalTitle>}
			{illustrationIcon && <Icon component={illustrationIcon} />}
			{title && <Title>{title}</Title>}
			{description && <Description>{description}</Description>}
			{warningDescription && <WarningText>{warningDescription}</WarningText>}
			{btnName && (
				<ButtonWrap warningDescription={warningDescription}>
					<Button theme='primary' onClick={() => onClick()} big>
						{btnName}
					</Button>
				</ButtonWrap>
			)}
			{linkName && (
				<ButtonWrap warningDescription={warningDescription}>
					<ButtonLink theme='primary' href={linkHref} big='true'>
						{linkName}
					</ButtonLink>
				</ButtonWrap>
			)}
		</div>
	)
}

export { FormAlert }
