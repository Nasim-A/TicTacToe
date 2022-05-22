import React from "react";
import Square from "./Square";
import "../App.css";

const Board = ({ board, onClick }) => {
	return (
		<div className="board mt-8">
			{board.map((value, i) => {
				return (
					<Square value={value} onClick={() => value === null && onClick(i)} />
				);
			})}
		</div>
	);
};

export default Board;
