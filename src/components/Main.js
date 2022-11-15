import { useState } from "react";
import Grid from "./Grid";
import "./Main.css";

function gimmeGrid() {
	let values = [];
	for (let i = 1; i <= 10; ++i) {
		for (let j = 1; j <= 20; ++j) {
			values.push(i * j);
		}
	}
	return values;
}

function Main() {
	const [grid, setGrid] = useState(gimmeGrid());

	return (
		<main>
			<Grid grid={grid} />
		</main>
	);
}

export default Main;
