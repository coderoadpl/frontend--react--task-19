import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const stringA = 'Ala ma kota'
const stringB = 'Kot ma Ale'

const condition = true

let result = ''
if (condition) {
  result = stringA
} else {
  result = stringB
}

const makeResult = () => {
  if (condition) {
    return stringA
  } else {
    return stringB
  }
}

ReactDOM.render(
  <div>
    {
      condition ? stringA : stringB
    }
    <br />
    {result}
    <br />
    {makeResult()}
    <br />
    {
      (() => {
        if (condition) {
          return stringA
        } else {
          return stringB
        }
      })()
    }
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
