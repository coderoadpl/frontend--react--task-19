import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const string1 = 'Ala ma'
const string2 = 'kota'

ReactDOM.render(
  <div>
    <h1>What JSX can render</h1>
    <h4>String</h4>
    <div>
      {`${string1} ${string2}`}
    </div>
    <h4>Number</h4>
    <div>
      {2 + 2}
    </div>
    <div>
      {1.124}
    </div>
    <h4>Boolean</h4>
    <div>
      {String(true)}:{' '}
      {true}{' '}
      |
    </div>
    <div>
      {String(false)}:{' '}
      {false}{' '}
      |
    </div>
    <h4>undefined</h4>
    <div>
      {undefined}
    </div>
    <h4>null</h4>
    <div>
      {null}
    </div>
    <h4>Array</h4>
    <div>
      {['Ala ', 'Ola ', 'Ela']}
    </div>
    <div>
      {[1, 2, 3, 4]}
    </div>
    <h4>Functions</h4>
    <div>
      {(() => { console.log('Im an function!') })}
    </div>
    <div>
      {(() => { console.log('Im an function!') })()}
    </div>
    <div>
      {(() => { return 'Some string value' })()}
    </div>
    <h4>Object</h4>
    {/* <div>
      {{
        name: 'Mateusz',
        company: 'CodeRoad'
      }}
    </div> */}
    <div>
      {Object.entries({
        name: 'Mateusz',
        company: 'CodeRoad'
      })}
    </div>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
