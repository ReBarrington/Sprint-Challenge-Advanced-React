import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);

});

test("renders the app header", () => {

  const { getByText } = render(<App />);

  const header = getByText(/Women's World Cup Project/i);

  // assert that the header element is being rendered
  expect(header).ToBeInTheDocument();

});


