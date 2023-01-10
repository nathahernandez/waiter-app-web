import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 198px;
	background: ${prop => prop.theme.COLORS.RED._500};
	display: flex;
	align-items: center;
	justify-content: center;
`
export const Content = styled.div`
	width: 100%;
	max-width: 1216px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const LogoImg = styled.img`
	overflow: hidden;
`
export const TitleHeader = styled.h3`
	font-size: ${prop => prop.theme.TYPOGRAPH.HEADING.H3.SIZE};
	font-weight: ${prop => prop.theme.TYPOGRAPH.HEADING.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.HEADING.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.WHITE._100};
`
export const TextHeader = styled.p`
	margin-top: 6px;
	font-size: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.MD};
	font-weight: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.WHITE._100};
`
