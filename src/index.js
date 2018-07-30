import React from 'react';
import { render } from 'react-dom';
import MyComponent from './components/index';

const App = () => (
  <MyComponent />
);

render(<App />, document.getElementById("root"));
