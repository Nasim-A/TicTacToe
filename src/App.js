import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import ResetBoard from "./components/ResetBoard";

function App() {
	const winPatterns = [
		// horizontal
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],

		// vertical
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],

		// diagonal
		[0, 4, 8],
		[2, 4, 6],
	];

	const [board, setBoard] = useState(Array(9).fill(null));
	const [currentPlayerIsX, setCurrentPlayer] = useState(true);
	const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
	const [gameOver, setGameOver] = useState(false);

	const handeClick = (squareIndex) => {
		const updateBoard = board.map((value, i) => {
			if (i === squareIndex) {
				return currentPlayerIsX ? "X" : "O";
			} else {
				return value;
			}
		});

		setBoard(updateBoard);

		const winner = handleWin(updateBoard);

		if (winner) {
			if (winner === "O") {
				let { oScore } = scores;
				oScore += 1;
				setScores({ ...scores, oScore });
			} else {
				let { xScore } = scores;
				xScore += 1;
				setScores({ ...scores, xScore });
			}
		}

		setCurrentPlayer(!currentPlayerIsX);
	};

	const handleWin = (board) => {
		for (let i = 0; i < winPatterns.length; i++) {
			const [a, b, c] = winPatterns[i];

			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				setGameOver(true);
				return board[a];
			}
		}
	};

	const handleReset = () => {
		setGameOver(false);
		setBoard(Array(9).fill(null));
	};

	return (
		<div className="App">
			<div className="conatiner mx-auto text-center m-4">
				<h1 className="text-5xl font-bold m-4 text-slate-700">
					Tic Tac Toe
					<Scoreboard scores={scores} currentPlayerIsX={currentPlayerIsX} />
					<Board board={board} onClick={gameOver ? handleReset : handeClick} />
					<ResetBoard handleReset={handleReset} />
				</h1>
			</div>
		</div>
	);
}

export default App;
