import React from 'react'
import ReactDOM from 'react-dom'

import HelloJS from './HelloJS'

import './index.css'
import reportWebVitals from './reportWebVitals'

const helloJS1 = new HelloJS()
const helloJS2 = new HelloJS()
document.body.appendChild(helloJS1.render())
document.body.appendChild(helloJS2.render())

ReactDOM.render(
  <div></div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
