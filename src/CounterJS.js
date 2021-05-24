export class CounterJS {
  constructor () {
    this.container = null

    this.state = {
      number: 0
    }
  }

  inc () {
    this.setState({ number: this.state.number + 1 })
  }

  setState (newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.render()
  }

  render () {
    console.log('Render CounterJS was called')

    if (!this.container) {
      this.container = document.createElement('div')
    }

    this.container.innerHTML = ''

    const { number } = this.state

    const h1 = document.createElement('h1')
    h1.innerText = number

    const button = document.createElement('button')
    button.innerText = '+'

    button.addEventListener(
      'click',
      this.inc.bind(this)
    )

    this.container.appendChild(h1)
    this.container.appendChild(button)

    return this.container
  }
}

export default CounterJS
