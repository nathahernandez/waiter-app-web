import Logo from "../../assets/images/logo.svg";
import { Container, TitleHeader, TextHeader, Content } from "./styles";

export default function Header () {
	return (
		<Container>
			<Content>
				<div>
					<TitleHeader>
						Pedidos
					</TitleHeader>
					<TextHeader>
						Acompanhe os pedidos dos Clientes
					</TextHeader>
				</div>
				<img src={Logo} alt="Dois Garçons, um Homem e uma Mulher"/>
			</Content>
		</Container>
	);
}