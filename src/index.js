import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const names = ['Ala', 'Ola', 'Ela', 'Ola']

ReactDOM.render(
  <div>
    <ul>
      {names.map((name, i) => <li key={i}>{name}</li>)}
    </ul>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
