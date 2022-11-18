import styled from "styled-components";

export const Container = styled.div`
	padding: 16px;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 16px;
`;

export const Stage = styled.p`
	font-size: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.SM};
	font-weight: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.GRAY._900};
`;

export const Table = styled.div`
	width: 384px;
	height: 221px;
	padding: 40px 0px;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius: 8px;
`;

export const TableNumber = styled.p`

`;
export const TableItens = styled.p`

`;