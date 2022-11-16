import "./GridSquare.css";

function GridSquare({ i, j, isOrigin, isActivated, pickOrigin, distance }) {
	return (
		<div
			className={`square ${isOrigin ? "origin" : ""} ${
				isActivated ? "activated" : ""
			}`}
			onClick={() => pickOrigin(i, j)}
		>
			{distance !== -1 && distance !== 200 ? (
				<p className="distance">{distance}</p>
			) : (
				"?"
			)}
		</div>
	);
}

export default GridSquare;
