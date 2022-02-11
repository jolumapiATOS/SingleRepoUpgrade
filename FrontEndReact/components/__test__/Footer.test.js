
import React from "react";
import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from '../Navbar';

test('The Footer is rendering', () => {
   const elementFooter = render(<Footer />);
   const title = elementFooter.getByTestId('title');
   expect(title.textContent).toBe('UPgrade | Front End');
});

test( "The Fotter has a paragraph element", () => {
    render(<Footer/>);
    const paragraph = screen.getByText(/Welcome to the jungle/i);
    expect( paragraph ).toBeInTheDocument();
});