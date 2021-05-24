import React from 'react'

export class CounterReact extends React.Component {
  constructor () {
    super()

    // initial state
    this.state = {
      number: 0
    }
  }

  render () {
    console.log('Render was called')

    const { number } = this.state

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 })
          }}
        >
          +
        </button>
      </div>
    )
  }
}

export default CounterReact
