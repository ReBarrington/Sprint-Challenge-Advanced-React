import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test("renders correctly", () => {
    render(<Navbar />);
  });
  
  test("renders the navbar", () => {
    // arrange
    const { getByText, getByTestId } = render(<Navbar />); // render returns an object with a bunch of query functions
  
    // act
    const navbar = getByTestId(/headerTest/i);
  
    // assert that the header element is being rendered
    expect(navbar).toBeInTheDocument(); // toBeInTheDocument is called an assertion function
  });