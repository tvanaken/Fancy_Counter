import Count from "./Count";
import Button from "./Button";
import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    return (
        <div className="app">
            <Count number={number} />
            <Button setNumber={setNumber} />
        </div>
    );
}

export default App;
