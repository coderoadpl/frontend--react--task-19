import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const HTML = '<h1>Hello CodeRoad</h1>'

ReactDOM.render(
  <div
    id={'id-1'}
    className={'class-1 class-2'}
  >
    <label
      htmlFor={'checkbox-1'}
    >
      {'Controlled checkbox (can\'t update checked value)'}
    </label>
    <input
      id={'checkbox-1'}
      type={'checkbox'}
      checked={true}
    />
    <label
      htmlFor={'checkbox-2'}
    >
      Uncontrolled checkbox (can update checked value)
    </label>
    <input
      id={'checkbox-2'}
      type={'checkbox'}
      defaultChecked={true}
    />
    <p>
      {HTML}
    </p>
    <p
      dangerouslySetInnerHTML={{
        __html: HTML
      }}
    >
    </p>
    <select value={'2'}>
      <option value={'1'}>First</option>
      <option value={'2'}>Second</option>
      <option value={'3'}>
        Third
      </option>
    </select>
    <div
      style={{
        color: 'red',
        backgroundColor: 'black'
      }}
    >
      RED TEXT
    </div>
    <input value={'Controlled input'} />
    <input defaultValue={'Uncontrolled input'} />
    <textarea value={'Controlled textarea'}></textarea>
    <textarea defaultValue={'Uncontrolled textarea'}></textarea>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
