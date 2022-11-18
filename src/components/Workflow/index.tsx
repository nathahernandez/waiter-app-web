import WorkStage from "../WorkStage";
import { Container } from "./styles";


export default function Workflow () {
	return (
		<Container>
			<WorkStage />
			<WorkStage />
			<WorkStage />
		</Container>
	);
}