import Count from "./Count";
import Button from "./Button";
import { useState } from "react";

function App() {
	const [number, setNumber] = useState(0);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Count number={number} />
			<Button setNumber={setNumber} />
		</div>
	);
}

export default App;
