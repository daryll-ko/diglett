import "./Grid.css";
import GridSquare from "./GridSquare";

function Grid({ grid }) {
	const squares = grid.map((value) => <GridSquare value={value} />);

	return <div className="grid">{squares}</div>;
}

export default Grid;
