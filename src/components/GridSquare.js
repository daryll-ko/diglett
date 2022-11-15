import "./GridSquare.css";

function GridSquare({ i, j, isOrigin, pickOrigin }) {
	return (
		<div
			className={`square ${isOrigin ? "origin" : ""}`}
			onClick={() => pickOrigin(i, j)}
		></div>
	);
}

export default GridSquare;
