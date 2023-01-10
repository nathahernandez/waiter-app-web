import {
	Overlay,
	ContainerBody,
	Body,
	ContainerButtons,
	ContainerItem,
	StatusContainer,
	TitleContainer,
	TextSM, TextMD,
	TotalContainer,
	Button,
	TitleText,
	ButtonClose
} from './styles'

import Close from '../../assets/images/close-icon.svg'
import Item from '../Item/index'
import { OrdersType } from '../../types'
import { totalPriceResolve, iconResolve, stageResolve } from '../../utils/'

interface OrderModalProps {
	visible: boolean;
	setVisible: (set : boolean) => void;
	order: OrdersType | undefined;
}

export default function OrderModal ({ visible, setVisible, order } : OrderModalProps) {

	if(!visible || !order){
		return null
	}

	const { status, products, table } = order
	const handleClose = () => setVisible(!visible)

	return (
		<Overlay>
			<ContainerBody>
				<Body>
					<TitleContainer>
						<TitleText>
								Mesa {table}
						</TitleText>
						<ButtonClose onClick={handleClose} src={Close} alt="Icone de fechar" />
					</TitleContainer>
					<StatusContainer>
						<TextSM>
							Status do Pedido
						</TextSM>
						<TextMD>
							{iconResolve(status)} {stageResolve(status)}
						</TextMD>
					</StatusContainer>
					<ContainerItem>
						<TextSM>
							Itens
						</TextSM>
						{
							products ? products.map(product => <Item key={product._id} productInfo={product} />)
								: null
						}

					</ContainerItem>
					<TotalContainer>
						<TextSM>
							Total
						</TextSM>
						<TextMD>
							{totalPriceResolve(products)}
						</TextMD>
					</TotalContainer>
					<ContainerButtons>
						<Button name="conclude">
							✅ Concluir pedido
						</Button>
						<Button type="button" onClick={handleClose}>
							Cancelar
						</Button>
					</ContainerButtons>
				</Body>
			</ContainerBody>
		</Overlay>
	)
}