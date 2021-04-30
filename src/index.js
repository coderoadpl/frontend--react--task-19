import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const TEXTS = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere']

ReactDOM.render(
  <div>
    <h1>Hello React</h1>
    <ul>
      <li>{TEXTS[0]}</li>
      <li>{TEXTS[1]}</li>
      <li>{TEXTS[2]}</li>
    </ul>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
