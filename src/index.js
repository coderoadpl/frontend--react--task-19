import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const button = document.createElement('button')
button.innerText = 'Click me – pure JS'
button.addEventListener(
  'click',
  (event) => {
    console.log('Clicked', event, event.target)
  }
)

document.body.appendChild(button)

ReactDOM.render(
  <div>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
