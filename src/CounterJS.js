export class CounterJS {
  constructor () {
    this.container = null

    this.number = 0
  }

  inc () {
    this.number = this.number + 1
    this.render()
  }

  render () {
    if (!this.container) {
      this.container = document.createElement('div')
    }

    this.container.innerHTML = ''

    const h1 = document.createElement('h1')
    h1.innerText = this.number

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
