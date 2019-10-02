import "@testing-library/jest-dom/extend-expect"

import React from "react"
import { cleanup, fireEvent, render } from "@testing-library/react"

import Counter from "./Counter";

describe("Counter", () => {
    it("should render 0 initially", () => {
        const { getByText } = render(<Counter />);
        const counterValue = getByText("0");
        expect(counterValue).toBeInTheDocument();
    });

    it("should have a disabled subtract button when rendering 0", () => {
        const { getByText } = render(<Counter />);
        const subtractButton = getByText("–");
        expect(subtractButton).toBeDisabled();
    });

    it("should have a disabled add button when rendering 10", () => {
        const { getByText, getByTitle } = render(<Counter />);
        const addButton = getByText("+");

        for (let i = 0; i < 10; i++) {
            fireEvent.click(addButton);
        }

        expect(getByText("10")).toBeInTheDocument()
        expect(addButton).toBeDisabled();
    });

    it("should render 0 - 10", () => {
        const { getByText, getByTitle } = render(<Counter />);
        const addButton = getByText("+");

        for (let i = 0; i < 10; i++) {
            fireEvent.click(addButton);
            const value = (i + 1).toString();
            expect(getByText(value)).toBeInTheDocument()
        }
    })
})
