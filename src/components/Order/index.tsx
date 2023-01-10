import { OrdersType } from '../../types'
import { Container } from './styles'

interface OrderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	order: OrdersType
}

export default function Order ({ order, ...props  } : OrderProps) {
	const { table, products } = order
	return (
		<Container {...props} type="button">
			<strong>Mesa {table}</strong>
			<span>{products.length} itens</span>
		</Container>
	)
}