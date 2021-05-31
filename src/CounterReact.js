import React from 'react'

export class CounterReact extends React.Component {
  constructor () {
    super()

    this.state = {
      number: 0
    }

    this.inc = () => {
      this.setState({ number: this.state.number + 1 })
    }
  }

  render () {
    console.log('Render CounterReact was called')

    const { number } = this.state

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={this.inc}
        >
          +
        </button>
      </div>
    )
  }
}

export default CounterReact
