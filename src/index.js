import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const files = [
  {
    id: 1,
    name: 'File 1'
  },
  {
    id: 2,
    name: 'Folder 1',
    files: [
      {
        id: 2,
        name: 'File 2'
      },
      {
        id: 3,
        name: 'File 3'
      }
    ]
  },
  {
    id: 4,
    name: 'File 4'
  },
  {
    id: 5,
    name: 'File 5'
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
              <ul>
                {
                  file.files && file.files.map((innerFile) => {
                    return (
                      <li key={innerFile.id}>
                        {innerFile.name}
                      </li>
                    )
                  })
                }
              </ul>
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
