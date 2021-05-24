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
    const { number } = this.state

    return <h1>{number}</h1>
  }
}

export default CounterReact
