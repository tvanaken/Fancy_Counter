import { useEffect, useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                setCount(count + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [count]);

    return (
        <div className={`card ${locked ? "card--limit" : ""}`}>
            <Title locked={locked} />
            <Count count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer setCount={setCount} locked={locked} />
        </div>
    );
}
