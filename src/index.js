import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const isEven = (number) => number % 2 === 0
const isOdd = (number) => number % 2 !== 0
const renderNumber = (number, i) => {
  return (
    <li key={i}>{number}</li>
  )
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(isEven)
const oddNumbers = numbers.filter(isOdd)

ReactDOM.render(
  <div>
    <h4>All numbers</h4>
    <ul>
      {numbers.map(renderNumber)}
    </ul>
    <h4>Even numbers</h4>
    <ul>
      {evenNumbers.map(renderNumber)}
    </ul>
    <h4>Odd numbers</h4>
    <ul>
      {oddNumbers.map(renderNumber)}
    </ul>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
