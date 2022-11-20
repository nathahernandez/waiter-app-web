import { OrdersType } from "../types";

export const iconResolve = (stage : string) => {
	const resolve = stage === "WAITING" ? "🕒" : stage === "IN_PRODUCTION" ? "👨‍🍳" : "✅";
	return resolve;
};

export const stageResolve = (stage : string) => {
	const resolve = stage === "WAITING" ? "Fila de espera" : stage === "IN_PRODUCTION" ? "Em produção" : "Pronto!";
	return resolve;
};

export const statusResolve = ( orders: OrdersType[] | undefined) => {

	let statusProd : OrdersType[] = [];
	let statusDone : OrdersType[] = [];
	let statusWait : OrdersType[] = [];

	orders?.map(( order: OrdersType) => {
		switch(order.status){
		case "WAITING":
			statusWait = [...statusWait, order];
			break;
		case "IN_PRODUCTION":
			statusProd = [...statusProd, order];
			break;
		case "DONE":
			statusDone = [...statusDone, order];
			break;
		}
	});
	return {
		statusWait,
		statusProd,
		statusDone
	};
};