import styled from "styled-components";

export const Container = styled.div`
	border: ${prop => prop.theme.BORDER};
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	min-width: 384px;
	margin: 16px;
`;

export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 8px;
`;

export const Stage = styled.strong`
	font-size: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.SM};
	line-height: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.LINE_HEIGHT};
	color: ${prop => prop.theme.COLORS.GRAY._900};
`;

export const ContainerOrders = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
`;