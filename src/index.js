import React from 'react';
import { render } from 'react-dom';
import Presentacion from './components/page/index';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

const App = () => (
  <div>
  <Presentacion />
  </div>
);

render(<App />, document.getElementById("root"));
