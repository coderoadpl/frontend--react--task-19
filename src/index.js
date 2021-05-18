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
    <ul>
      {
        files.map((file) => {
          return (
            <li key={file.id}>
              {file.name}
              {
                file.files ?
                  <ul>
                    {
                      file.files.map((innerFile) => {
                        return (
                          <li key={innerFile.id}>
                            {innerFile.name}
                          </li>
                        )
                      })
                    }
                  </ul>
                  :
                  null
              }
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
