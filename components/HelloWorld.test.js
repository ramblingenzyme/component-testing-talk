import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { cleanup, render } from '@testing-library/react'

import { HelloWorldSFC, HelloWorldFC, HelloWorldClass } from "./HelloWorld"

describe("Hello world!", () => {
    const components = [
        HelloWorldSFC,
        HelloWorldFC,
        HelloWorldClass
    ];

    it("should render", () => {
        for (const Component of components) {
            const { getByText } = render(<Component />);
            expect(getByText("Hello world!")).toBeInTheDocument();

            // Clean up the DOM
            cleanup()
        }
    });
});
