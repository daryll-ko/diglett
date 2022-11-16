import "./GridSquare.css";

function GridSquare({ i, j, isOrigin, pickOrigin, distance }) {
	return (
		<div
			className={`square ${isOrigin ? "origin" : ""} ${
				!isOrigin && distance !== -1 && distance !== 20 * 40 ? "fade" : ""
			}`}
			onClick={() => pickOrigin(i, j)}
		>
			{distance !== -1 && distance !== 20 * 40 ? (
				<p className="distance">{distance}</p>
			) : (
				"?"
			)}
		</div>
	);
}

export default GridSquare;
