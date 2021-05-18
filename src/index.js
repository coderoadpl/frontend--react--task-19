import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const files = [
  {
    id: 1,
    name: 'File1'
  },
  {
    id: 2,
    name: 'File2'
  },
  {
    id: 3,
    name: 'File3'
  },
  {
    id: 4,
    name: 'File4'
  }
]

ReactDOM.render(
  <div>
    <ul>
      {
      files.map((file) => {
        return (
          <li key={file.id}>
            {file.name}
          </li>
        )
      })
      }
    </ul>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
