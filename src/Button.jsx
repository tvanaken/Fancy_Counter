export default function Button({ setNumber }) {
	return (
		<button
			onClick={() => {
				setNumber((prev) => prev + 1);
			}}
		>
			+
		</button>
	);
}
