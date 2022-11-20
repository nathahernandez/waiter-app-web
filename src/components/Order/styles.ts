import styled from "styled-components";

export const Container = styled.button`
	min-width: 352px;
	min-height: 128px;
	margin-top: 24px;
	padding: 40px 0px;
	border: ${prop => prop.theme.BORDER};
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${prop => prop.theme.COLORS.WHITE._100};

	strong {
		font-weight: 500;
	}
	span {
		font-size: ${prop => prop.theme.TYPOGRAPH.BODY_TEXT.SM};
		color: ${prop => prop.theme.COLORS.GRAY._600}
	}
`;