import React from 'react';
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("Text",()=>{
    render(<App />);
    const textElement = screen.getByText('Hello Priyansh');

    expect(textElement).toBeInTheDocument();
})