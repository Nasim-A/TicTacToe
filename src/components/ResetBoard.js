import React from "react";

const ResetBoard = ({ handleReset }) => {
	return (
		<button
			onClick={handleReset}
			className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 m-8 rounded"
		>
			Reset
		</button>
	);
};

export default ResetBoard;
