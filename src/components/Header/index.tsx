import Logo from "../../assets/images/logo.svg";
import { Container, Box, TitleHeader, TextHeader } from "./styles";

export default function Header () {
	return (
		<Container>
			<Box>
				<TitleHeader>
					Pedidos
				</TitleHeader>
				<TextHeader>
					Acompanhe os pedidos dos Clientes
				</TextHeader>
			</Box>
			<Box>
				<img src={Logo} alt="Dois Garçons, um Homem e uma Mulher"/>
			</Box>
		</Container>
	);
}