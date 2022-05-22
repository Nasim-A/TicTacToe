import React from "react";

const Square = ({ value, onClick }) => {
	const squareColor =
		value === "X"
			? "text-red-600 border border-solid border-red-600"
			: "text-blue-600 border border-solid border-blue-600";

	return (
		<button
			className={` ${squareColor} text-5xl bg-slate-100 hover:bg-slate-300 font-bold rounded shadow-md w-32 h-32`}
			onClick={onClick}
		>
			{value}
		</button>
	);
};

export default Square;
