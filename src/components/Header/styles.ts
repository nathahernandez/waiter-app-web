import styled from "styled-components";

export const Container = styled.header`
	background: ${prop => prop.theme.COLORS.RED._500};
	display: flex;
	justify-content: space-around;
	align-items: center;

`;
export const Box = styled.div``;
export const TitleHeader = styled.h3`
	font-size: ${prop => prop.theme.TYPOGRAPH.HEADING.H3.SIZE};
	font-weight: ${prop => prop.theme.TYPOGRAPH.HEADING.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.HEADING.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.WHITE._100}
`;
export const TextHeader = styled.p`
	font-size: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.MD};
	font-weight: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.WHITE._100}
`;