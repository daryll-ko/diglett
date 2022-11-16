import "./Grid.css";
import GridSquare from "./GridSquare";

function Grid({ grid, pickOrigin, distances }) {
	const squares = grid.map(({ i, j, isOrigin, isActivated }, index) => (
		<GridSquare
			key={index}
			i={i}
			j={j}
			isOrigin={isOrigin}
			isActivated={isActivated}
			pickOrigin={pickOrigin}
			distance={distances !== null ? distances[i][j] : -1}
		/>
	));

	return <div className="grid">{squares}</div>;
}

export default Grid;
