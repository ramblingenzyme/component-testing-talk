import React, { useState } from "react"

const buttonStyle = { fontSize: "30px", fontStyle: "bold" }

const Counter = (props) => {
    const [value, setValue] = useState(0);
    const addOne = () => setValue(x => Math.min(x + 1, 10));
    const subtractOne = () => setValue(x => Math.max(x - 1, 0));

    return (
        <div>
            <button style={buttonStyle} disabled={value === 0} onClick={subtractOne}>&ndash;</button>
            <p style={{ textAlign: "center", fontStyle: "bold" }}>{value}</p>
            <button style={buttonStyle} disabled={value === 10} onClick={addOne}>+</button>
        </div>
    );
}

export default Counter;
