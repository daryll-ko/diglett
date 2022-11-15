import { useState } from "react";
import Grid from "./Grid";
import "./Main.css";

function gimmeGrid() {
	let indices = [];
	for (let i = 0; i < 10; ++i) {
		for (let j = 0; j < 20; ++j) {
			indices.push([i, j]);
		}
	}
	return indices.map(([i, j]) => ({
		i,
		j,
		isOrigin: false,
	}));
}

function Main() {
	const [grid, setGrid] = useState(gimmeGrid());

	const pickOrigin = (i_to, j_to) => {
		setGrid((currentGrid) =>
			currentGrid.map(({ i, j, _ }) => ({
				i,
				j,
				isOrigin: i === i_to && j === j_to,
			}))
		);
	};

	return (
		<main>
			<Grid grid={grid} pickOrigin={pickOrigin} />
		</main>
	);
}

export default Main;
