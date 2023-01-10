import { OrdersType, ProductsType } from '../types'

export const iconResolve = (stage : string) => {
	const resolve = stage === 'WAITING' ? '🕒' : stage === 'IN_PRODUCTION' ? '👨‍🍳' : '✅'
	return resolve
}

export const stageResolve = (stage : string) => {
	const resolve = stage === 'WAITING' ? 'Fila de espera' : stage === 'IN_PRODUCTION' ? 'Em produção' : 'Pronto!'
	return resolve
}

export const currencyResolve = (price : number) => {
	const formatBR = {
		lang: 'pt-br',
		options: {
			style: 'currency',
			currency: 'BRL'
		}
	}
	return new Intl.NumberFormat(formatBR.lang, formatBR.options).format(price)
}

export const totalPriceResolve = ( products  : ProductsType[]) => {

	const totalPrice = products.reduce(( count, { product, quantity } ) => count + ( product.price* quantity ), 0)
	const totalPriceFormated = currencyResolve(totalPrice)

	return totalPriceFormated
}

export const statusResolve = ( orders: OrdersType[] | undefined) => {

	let statusProd : OrdersType[] = []
	let statusDone : OrdersType[] = []
	let statusWait : OrdersType[] = []

	orders?.map(( order: OrdersType) => {
		switch(order.status){
		case 'WAITING':
			statusWait = [...statusWait, order]
			break
		case 'IN_PRODUCTION':
			statusProd = [...statusProd, order]
			break
		case 'DONE':
			statusDone = [...statusDone, order]
			break
		}
	})
	return {
		statusWait,
		statusProd,
		statusDone
	}
}