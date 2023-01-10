import { useEffect, useState } from 'react'

import WorkStage from '../WorkStage'
import { Container, Content } from './styles'
import { api } from '../../services/api'
import { statusResolve } from '../../utils'
import { OrdersType } from '../../types'

export default function Workflow () {

	const [ ordersData, setOrdersData ] = useState<OrdersType[]>()

	useEffect(() => {
		api.get('/orders').then(res => setOrdersData(res.data))
	},[])

	const {
		statusDone,
		statusProd,
		statusWait
	} = statusResolve(ordersData)

	return (
		<Container>
			<Content>
				<WorkStage stage="WAITING" orders={statusWait}/>
				<WorkStage stage="IN_PRODUCTION" orders={statusProd}/>
				<WorkStage stage="DONE" orders={statusDone}/>
			</Content>
		</Container>
	)
}