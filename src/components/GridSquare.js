import "./GridSquare.css";

function GridSquare({ i, j, isOrigin, isActivated, pickOrigin }) {
	return (
		<div
			className={`square ${isOrigin ? "origin" : ""} ${
				isActivated ? "activated" : ""
			}`}
			onClick={() => pickOrigin(i, j)}
		></div>
	);
}

export default GridSquare;
