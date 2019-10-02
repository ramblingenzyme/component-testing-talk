import React, { useState } from "react";

export const HelloWorldSFC = (props) => <p>Hello world!</p>;

export const HelloWorldFC = (props) => {
    const [displayValue] = useState("Hello world!");
    return <p>{displayValue}</p>;
}

export class HelloWorldClass extends React.Component {
    render() {
        return <p>Hello world!</p>;
    }
}
