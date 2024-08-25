import React from 'react';
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../screens/Home';

test("Text",()=>{
    render(<BrowserRouter>
        <Home>
            <Header/>
        </Home>
    </BrowserRouter>);
    const textElement = screen.getByText('Home');

    expect(textElement).toBeInTheDocument();
})