import "./Grid.css";
import GridSquare from "./GridSquare";

function Grid({ grid, pickOrigin }) {
	const squares = grid.map(({ i, j, isOrigin, isActivated }, index) => (
		<GridSquare
			key={index}
			i={i}
			j={j}
			isOrigin={isOrigin}
			isActivated={isActivated}
			pickOrigin={pickOrigin}
		/>
	));

	return <div className="grid">{squares}</div>;
}

export default Grid;
