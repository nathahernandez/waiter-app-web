import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

`;

export const Content = styled.div`
	max-width: 1216px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 1024px){
		flex-direction: column;
	}
`;