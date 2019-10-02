import React, { useState } from "react"

const buttonStyle = { fontSize: "30px", fontStyle: "bold" };
const pStyle = { textAlign: "center", fontStyle: "bold" };

const Counter = (props) => {
    const [value, setValue] = useState(0);
    const addOne = () => setValue(x => Math.min(x + 1, 10));
    const subtractOne = () => setValue(x => Math.max(x - 1, 0));

    return (
        <div>
            <button
                aria-label="subtract"
                disabled={value === 0}
                onClick={subtractOne}
                style={buttonStyle}
            >
                &ndash;
            </button>
            <p title="value" style={pStyle}>{value}</p>
            <button
                aria-label="add"
                disabled={value === 10}
                onClick={addOne}
                style={buttonStyle}
            >
                +
            </button>
        </div>
    );
}

export default Counter;
