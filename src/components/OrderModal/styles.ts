import styled from 'styled-components'

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ContainerBody = styled.div`
	min-width: 480px;
	min-height: 557px;
	background-color: ${prop => prop.theme.COLORS.WHITE._100};
	border-radius: 0.5rem;
`

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 416px;
	margin: 32px;
	gap: 32px;
`
export const TitleContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const TitleText = styled.h4`
	font-size: ${prop => prop.theme.TYPOGRAPH.HEADING.H4.SIZE};
	font-weight: ${prop => prop.theme.TYPOGRAPH.HEADING.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.HEADING.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.GRAY._900};
`

export const ButtonClose = styled.img`
	cursor: pointer;
`

export const StatusContainer = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	gap: 8px;
`

export const TextSM = styled.span`
	font-size: 14px;
	font-weight: 500;
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.GRAY._900};
	opacity: 0.8;
`

export const TextMD = styled.span`
	font-size: ${prop => prop.theme.TYPOGRAPH.HEADING.H6.SIZE};
	font-weight: ${prop => prop.theme.TYPOGRAPH.HEADING.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
`

export const ContainerItem = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const TotalContainer = styled.section`
	display: flex;
	justify-content: space-between;
`
export const ContainerButtons = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
`
export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 48px;
	border-radius: 48px;
	border: none;
	font-size: ${prop => prop.theme.TYPOGRAPH.HEADING.H6.SIZE};
	font-weight: ${prop => prop.theme.TYPOGRAPH.HEADING.WEIGHT};
	line-height: 100%;
	color: ${prop => prop.name === 'conclude' ? prop.theme.COLORS.WHITE._100 : prop.theme.COLORS.RED._500};
	background-color: ${prop => prop.name === 'conclude' ? prop.theme.COLORS.GRAY._900 : prop.theme.COLORS.WHITE._100};
	:hover{
		opacity: 0.8;
	}
`