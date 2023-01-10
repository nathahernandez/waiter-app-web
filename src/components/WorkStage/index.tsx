import { Container, Stage, ContainerOrders, Content, Header } from './styles'
import { iconResolve, stageResolve } from '../../utils'
import Order from '../Order'
import { OrdersType } from '../../types'
import OrderModal from '../OrderModal'
import { useState } from 'react'

interface WorkstageProps {
	stage: string;
	orders: OrdersType[]
}

export default function WorkStage ({ stage, orders }: WorkstageProps) {

	const [ isModalVisible, setIsModalVisible ] = useState(false)
	const [ selectedOrder, setSelectedOrder ] = useState<OrdersType>()

	const handleOpenOrder = (order : OrdersType) => {
		setSelectedOrder(order)
		setIsModalVisible(true)
	}

	return (
		<Container>
			<Content>
				<OrderModal order={selectedOrder} visible={isModalVisible} setVisible={setIsModalVisible} />
				<Header>
					<span>
						{ iconResolve(stage) }
					</span>
					<Stage>
						{ stageResolve(stage)}
					</Stage>
					<span>
					</span>
				</Header>
				{
					orders.length > 0 ?

						<ContainerOrders>
							{ orders.map( (order) => <Order onClick={() => handleOpenOrder(order)} key={order._id} order={order}/> ) }
						</ContainerOrders>

						: null
				}

			</Content>
		</Container>
	)
}