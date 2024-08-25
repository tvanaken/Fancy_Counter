import { useEffect } from "react";

export default function Count({ number }) {
	useEffect(() => {
		document.title = `Count: ${number}`;
	}, [number]);
	return <span className="count">{number}</span>;
}
