import { Container, Stage, Table, TableNumber, TableItens } from "./styles";

export default function WorkStage () {
	return (
		<Container>
			<Stage>
				Fila de espera
			</Stage>
			<Table>
				<TableNumber>
					Mesa 2
				</TableNumber>
				<TableItens>
					TableItens
				</TableItens>
			</Table>
		</Container>
	);
}