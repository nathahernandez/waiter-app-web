import {ProductImage, ItemContainer, ProductUnity, ProductName, ProductPrice, ProductContainer} from "./styles";
import { ProductType } from "../../types";
import { currencyResolve } from "../../utils";

interface ItemProps {
	productInfo:{
		product:  ProductType;
		quantity: number;
		_id: string;
	};
}

export default function Item ({ productInfo } : ItemProps) {

	const { product, quantity } = productInfo;
	const { name, price, imagePath } = product;

	return (
		<ItemContainer>
			<ProductImage src={`http://localhost:4444/uploads/${imagePath}`} />
			<ProductUnity>{quantity}x</ProductUnity>
			<ProductContainer>
				<ProductName>{name}</ProductName>
				<ProductPrice>{currencyResolve(price)}</ProductPrice>
			</ProductContainer>
		</ItemContainer>
	);
}