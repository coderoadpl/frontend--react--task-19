/* eslint-disable react/jsx-key */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

// eslint-disable-next-line no-unused-vars
const names = ['Ala', 'Ola', 'Ela']
const namesElements = [
  <li>Ala</li>,
  <li>Ola</li>,
  <li>Ela</li>
]

window.namesElements = namesElements

ReactDOM.render(
  <div>
    <ul>
      {namesElements}
    </ul>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
