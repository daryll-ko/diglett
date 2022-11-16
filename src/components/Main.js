import { useEffect, useState } from "react";
import { bfs_initialize, bfs_one_operation } from "../utils/bfs";
import Grid from "./Grid";
import "./Main.css";

function gimmeGrid() {
	let indices = [];
	for (let i = 0; i < 20; ++i) {
		for (let j = 0; j < 40; ++j) {
			indices.push([i, j]);
		}
	}
	return indices.map(([i, j]) => ({
		i,
		j,
		isOrigin: false,
		isActivated: false,
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
		setBfsData([null, null, null]);
	};

	const [oi, oj] = grid.reduce(
		(acc, { i, j, isOrigin, _ }) => (isOrigin ? [i, j] : acc),
		[-1, -1]
	);

	const [bfsData, setBfsData] = useState([null, null, null]);

	useEffect(() => {
		if (oi !== -1) {
			if (bfsData[0] === null) {
				setBfsData(bfs_initialize(oi, oj, 20, 40));
			} else {
				const intervalId = setInterval(() => {
					setBfsData(([currentQueue, currentDistances, currentVisited]) =>
						bfs_one_operation(currentQueue, currentDistances, currentVisited)
					);
				}, 10);
				return () => clearInterval(intervalId);
			}
		}
	}, [oi, oj, bfsData]);

	return (
		<main>
			<Grid grid={grid} pickOrigin={pickOrigin} distances={bfsData[1]} />
		</main>
	);
}

export default Main;
