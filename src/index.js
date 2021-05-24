import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const onChange = (event) => {
  console.log('Changed', event, event.target, event.target.value)
}

const inputOnChange = document.createElement('input')
inputOnChange.placeholder = 'Input HTML onchange'
inputOnChange.addEventListener(
  'change',
  onChange
)
document.body.appendChild(inputOnChange)

const inputOnInput = document.createElement('input')
inputOnInput.placeholder = 'Input HTML oninput'
inputOnInput.addEventListener(
  'input',
  onChange
)
document.body.appendChild(inputOnInput)

ReactDOM.render(
  <input
    placeholder={'Input JSX'}
    onChange={onChange}
  />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
