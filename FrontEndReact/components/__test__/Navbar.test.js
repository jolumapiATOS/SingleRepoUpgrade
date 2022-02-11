import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from '../Navbar';

test('The Navbar has multiple links', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
 });

 test( 'The image inside is Navbar', () => {
    render(<Navbar/>);
    const img = screen.getByRole('img');
    expect( img ).toBeInTheDocument();
 });

 test( 'Querying for an object with test ID', () => {
    render(<Navbar/>);
    const element = screen.getByTestId('link-home')
    expect( element ).toBeInTheDocument();
 });