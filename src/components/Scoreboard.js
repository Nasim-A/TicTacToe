import React from "react";

const Scoreboard = ({ scores, currentPlayerIsX }) => {
	const { xScore, oScore } = scores;

	return (
		<div className="w-80 p-4 mx-auto">
			<span
				className={`text-red-600 ${
					currentPlayerIsX && "border-b-red-600 border-b-8"
				}`}
			>
				X- {xScore}
			</span>{" "}
			|
			<span
				className={`text-blue-600  ${
					!currentPlayerIsX && "border-b-blue-600 border-b-8"
				}`}
			>
				{" "}
				O- {oScore}
			</span>
		</div>
	);
};

export default Scoreboard;
