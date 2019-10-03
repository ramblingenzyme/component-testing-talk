import React from "react";
import { useSteps } from "mdx-deck";

const CONTENT = [
    "How I Learned to Stop Worrying and Love the Bomb",
    <>How I Learned to Stop Worrying and Love <s>the Bomb</s></>,
    <></>,

]

export default () => {
    const step = useSteps(2);

    return (
        <h1 style={{ marginLeft: "20px" }} >
            How I Learned to Stop Worrying and Love <s>the Bomb</s> Component Testing
        </h1>
    );

}
