import React from 'react'

export class CounterReact extends React.Component {
  state = {
    number: 0
  }

  inc = () => {
    this.setState({ number: this.state.number + 1 })
    console.log('Component state', this.state)
  }

  inc3 = () => {
    this.setState((prevState) => {
      console.log('prevState', prevState)
      return { number: prevState.number + 1 }
    }) // { number: 1 }
    console.log('Component state', this.state)
    // other code
    this.setState((prevState) => {
      console.log('prevState', prevState)
      return { number: prevState.number + 1 }
    }) // { number: 2 }
    console.log('Component state', this.state)
    // other code
    this.setState((prevState) => {
      console.log('prevState', prevState)
      return { number: prevState.number + 1 }
    }) // { number: 3 }
    console.log('Component state', this.state)
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
          + 1
        </button>
        <button
          onClick={this.inc3}
        >
          + 3
        </button>
      </div>
    )
  }
}

export default CounterReact
