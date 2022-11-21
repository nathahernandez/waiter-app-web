import styled from "styled-components";

export const ItemContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 12px;
`;
export const ProductContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

export const ProductPrice = styled.span`
	font-size: 14px;
	font-weight: 500;
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.GRAY._900};
	opacity: 0.8;
`;

export const ProductName = styled.span`
	font-size: ${prop => prop.theme.TYPOGRAPH.HEADING.H6.SIZE};
	font-weight: ${prop => prop.theme.TYPOGRAPH.HEADING.WEIGHT};
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
`;

export const ProductUnity = styled.span`
	display: flex;
	align-self: flex-start;
	font-size: 14px;
	font-weight: 500;
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.GRAY._900};
	opacity: 0.8;
`;

export const ProductImage = styled.img`
	width: 48px;
	height: 40px;
	border-radius: 6px;
`;