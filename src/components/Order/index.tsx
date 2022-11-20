import { OrdersType } from "../../types";
import { Container } from "./styles";

interface OrderProps {
	order: OrdersType
}

export default function Order ({ order  } : OrderProps) {
	const { table, products } = order;
	return (
		<Container type="button">
			<strong>Mesa {table}</strong>
			<span>{products.length} itens</span>
		</Container>
	);
}