import { Container, Stage, ContainerOrders, Content, Header } from "./styles";
import { iconResolve, stageResolve } from "../../utils";
import Order from "../Order";
import { OrdersType } from "../../types";

interface WorkstageProps {
	stage: string;
	orders: OrdersType[]
}

export default function WorkStage ({ stage, orders }: WorkstageProps) {
	return (
		<Container>
			<Content>
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
					orders.length > 0 &&
						<ContainerOrders>
							{ orders.map( (order) => <Order key={order._id} order={order}/> ) }
						</ContainerOrders>
				}

			</Content>
		</Container>
	);
}