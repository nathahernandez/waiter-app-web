export interface OrdersType {
	_id: string;
	table: string;
	status: string;
	createdAt: string;
	products: ProductsType[];
	__v: number;

}

export interface ProductsType {
	product: ProductType;
	quantity: number;
	_id: string;
}

export interface ProductType {
	_id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: IngredientsType[];
    category: string;
    __v: number;
}

export interface IngredientsType {
	name: string;
	icon: string;
	_id: string;
}