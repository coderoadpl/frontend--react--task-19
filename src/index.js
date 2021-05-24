import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const onClick = (event) => {
  console.log('Clicked', event, event.target)
}

const button = document.createElement('button')
button.innerText = 'Click me – pure JS'
button.addEventListener(
  'click',
  onClick
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
